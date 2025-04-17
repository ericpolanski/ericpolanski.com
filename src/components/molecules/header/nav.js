"use client";
import { useEffect, useState } from "react";
import { NavItem, ImageNavItem } from "@/components/atoms/index";

export default function Nav() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const matchDark = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(matchDark.matches ? "dark" : "light");

    const handleChange = (e) => setTheme(e.matches ? "dark" : "light");
    matchDark.addEventListener("change", handleChange);

    return () => matchDark.removeEventListener("change", handleChange);
  }, []);

  return (
    <div>
      <nav>
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
            src={
              theme === "dark"
                ? "/github-dotted-dark.svg"
                : "/github-dotted.svg"
            }
            alt="GitHub Logo"
            size={50}
          />
          <ImageNavItem
            href="https://www.linkedin.com/in/ericpolanski/"
            src={
              theme === "dark"
                ? "/linkedin-dotted-dark.svg"
                : "/linkedin-dotted.svg"
            }
            alt="LinkedIn Logo"
            size={50}
          />
        </ul>
      </nav>
    </div>
  );
}