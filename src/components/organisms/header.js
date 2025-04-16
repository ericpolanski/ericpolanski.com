import MobileSidebar from "../molecules/header/mobile-sidebar";
import Nav from "../molecules/header/nav";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex justify-between items-center p-8">
        <Link href="/" className="hover:text-gray-500 transition-colors duration-300">
          <h1 style={{ fontFamily: 'Doto, sans-serif', fontSize: '2rem', fontWeight: 600 }}>
            Eric Polanski
          </h1>
        </Link>
        <div className="hidden md:block">
          <Nav />
        </div>
        <div className="md:hidden">
          <MobileSidebar />
        </div>
      </div>
      <hr className="hidden md:block border-t-2 border-dotted border-gray-500 mt-[-20px]" />
    </header>
  );
}