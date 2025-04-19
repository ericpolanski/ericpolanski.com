import Link from "next/link";

export default function NavItem({ href, text }) {
  return (
    <li className="hover:text-gray-500 transition-colors duration-300">
      <Link href={href} aria-label={text}>{text}</Link>
    </li>
  );
}
