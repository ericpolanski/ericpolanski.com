import ImageNavItem from '@/components/atoms/imgNavItem';

export default function Footer() {
  return (
    <footer
      className="relative w-full bg-[rgb(var(--background-start-rgb))] flex flex-col items-center py-3 space-y-1 text-[rgb(var(--foreground-rgb))] transition-colors duration-500 ease-in-out"
    >
      <hr
        className="absolute top-0 w-full border-t-2 border-dotted border-[rgb(var(--foreground-rgb))]"
      />
      <div className="flex space-x-4 mt-4">
        <ImageNavItem
          href="https://github.com/ericpolanski"
          name="github"
          alt="GitHub"
          size={24}
        />
        <ImageNavItem
          href="https://www.linkedin.com/in/ericpolanski"
          name="linkedin"
          alt="LinkedIn"
          size={24}
        />
      </div>

      <div className="text-sm">
        © {new Date().getFullYear()} Eric Polanski • Built with Next.js
      </div>
    </footer>
  );
}