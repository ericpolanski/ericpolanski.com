import Link from "next/link";

export default function NavItem({ href, text }) {
  return (
    <li className="hover:bg-gray-200 rounded px-2 py-1 transition-all duration-300">
      <Link href={href}>{text}</Link>
    </li>
  );
}
