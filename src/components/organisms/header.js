import MobileSidebar from "../molecules/header/mobile-sidebar";
import Nav from "../molecules/header/nav";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-50 bg-white">
      <div className="flex justify-between items-center p-8 md:px-16">
        <Link href="/" className="hover:text-gray-500 transition-colors duration-300">
          <h1
            className="text-black" 
            style={{ fontFamily: 'Doto, sans-serif', fontSize: '2.5rem', fontWeight: 800 }}>
            Eric Polanski
          </h1>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Nav />
          </div>
          <div className="md:hidden">
            <MobileSidebar />
          </div>
        </div>
      </div>
      <hr className="hidden md:block border-t-2 border-dotted border-gray-500 mt-[-20px]" />
    </header>
  );
}