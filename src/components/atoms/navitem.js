
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ href, text }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li
      className={`transition-colors duration-300 ${
        isActive ? "underline" : "hover:text-gray-500"
      }`}
    >
      <Link href={href} aria-label={text}>
        {text}
      </Link>
    </li>
  );
}
