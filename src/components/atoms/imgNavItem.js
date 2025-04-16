import Link from "next/link";
import Image from "next/image";

export default function ImageNavItem({ href, src, alt, size }) {
  return (
    <Link
        target="_blank"
        href={href}
        className="hover:text-gray-500 transition-colors duration-300 flex items-end"
    >
        <Image
        src= {src}
        alt= {alt}
        width={size}
        height={size}
        className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
        />
    </Link>
  );
}