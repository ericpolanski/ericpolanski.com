import NavItem from "../atoms/navitem";

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-end space-x-4">
        <NavItem href="/" text="Home" />
        <NavItem href="/about" text="About" />
        <NavItem href="/projects" text="Projects" />
        <NavItem href="/contact" text="Contact" />
      </ul>
    </nav>
  );
}
