"use client";
import { useEffect, useState } from "react";
import { NavItem, ImageNavItem } from "@/components/atoms/index";
import ThemeToggle from '@/components/atoms/theme-toggle';

export default function Nav() {
  return (
    <div>
      <nav aria-label="Main navigation">
        <ul
          style={{
            fontFamily: "Doto, sans-serif",
            fontWeight: 600,
            fontSize: "1.8rem",
            alignItems: "center",
          }}
          className="flex space-x-5"
        >
          <NavItem href="/about" text="About" />
          <NavItem href="/projects" text="Projects" />
          <NavItem href="/contact" text="Contact" />
          <ImageNavItem
            href="https://github.com/ericpolanski/"
            name="github"
            alt="GitHub Logo"
            size={50}
          />
          <ImageNavItem
            href="https://www.linkedin.com/in/ericpolanski/"
            name="linkedin"
            alt="LinkedIn Logo"
            size={50}
          />
          <li className="flex items-center">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </div>
  );
}