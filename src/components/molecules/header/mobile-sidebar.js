"use client";
import { useState } from "react";
import Icon from "@/components/atoms/icon";
import NavItem from "@/components/atoms/navitem";

export default function MobileSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button
        className="md:hidden text-gray-500 hover:text-gray-700 transition-colors duration-300"
        onClick={toggleSidebar}
        aria-label="Open menu"
      >
        <Icon
          name="menu"
          alt="Menu Icon"
          width={32}
          height={32}
          className="cursor-pointer"
        />
      </button>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-75"
            onClick={toggleSidebar}
          />
          {/* Slide-in drawer */}
          <div className="relative ml-auto w-64 h-full bg-[rgb(var(--background-start-rgb))] dark:bg-[rgb(var(--background-end-rgb))] p-6 shadow-lg">
            <button
              className="absolute top-4 right-4"
              onClick={toggleSidebar}
              aria-label="Close menu"
            >
              <Icon
                name="close"
                alt="Cancel Icon"
                width={32}
                height={32}
                className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
              />
            </button>
          <nav
            aria-label="Mobile navigation"
            className="text-base leading-relaxed space-y-4"
          >
            <ul className="text-[rgb(var(--foreground-rgb))] space-y-5">
                <NavItem href="/about" text="About" />
                <NavItem href="/projects" text="Projects" />
                <NavItem href="/resume" text="Resume" />
                <NavItem href="/contact" text="Contact" />
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/ericpolanski/"
                    className="hover:text-gray-500 transition-colors duration-300 block"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/ericpolanski/"
                    className="hover:text-gray-500 transition-colors duration-300 block"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}