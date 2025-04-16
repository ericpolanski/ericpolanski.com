import {NavItem, ImageNavItem} from "@/components/atoms/index";

export default function Nav() {

  return (
    <div>
          <nav>
            <ul
              style={{
                fontFamily: 'Doto, sans-serif',
                fontWeight: 600,
                fontSize: '1.8rem',
              }}
              className="flex space-x-5"
            >
              <NavItem href="/about" text="About" />
              <NavItem href="/projects" text="Projects" />
              <NavItem href="/contact" text="Contact" />
              <ImageNavItem href="https://github.com/ericpolanski/" src="../github-dotted.svg" alt="GitHub Logo" size={50} />
              <ImageNavItem href="https://www.linkedin.com/in/ericpolanski/" src="../linkedin-dotted.svg" alt="LinkedIn Logo" size={50} />
            </ul>
          </nav>
    </div>
  );
}