"use client";
import { useState } from "react";
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
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={toggleSidebar}
          >
            Close
          </button>
          <nav className="text-white hover:text-gray-300 transition-colors duration-300 text-center">
            <ul className="space-y-5">
              <NavItem href="/about" text="About" />
              <NavItem href="/projects" text="Projects" />
              <NavItem href="/contact" text="Contact" />
              <li>
                <a
                  target="_blank"
                  href="https://github.com/ericpolanski/"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ericpolanski/"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}