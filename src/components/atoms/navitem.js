import Link from "next/link";

export default function NavItem({ href, text }) {
  return (
    <li className="hover:text-gray-500 transition-colors duration-300 rounded px-2 py-1">
      <Link href={href}>{text}</Link>
    </li>
  );
}
