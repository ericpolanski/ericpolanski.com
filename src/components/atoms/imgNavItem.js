import Link from "next/link";
import Icon from "./icon";

export default function ImageNavItem({ href, name, alt, size }) {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      aria-label={alt}
      className="hover:text-gray-500 transition-colors duration-300 flex items-center"
    >
      <div
        className="flex-shrink-0"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <Icon
          name={name}
          alt={alt}
          width={size}
          height={size}
          className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
        />
      </div>
    </Link>
  );
}