"use client";
import MobileSidebar from "../molecules/header/mobile-sidebar";
import Nav from "../molecules/header/nav";
import Title from "../molecules/header/title";

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-50 bg-[rgb(var(--background-start-rgb))] transition-colors duration-500 ease-in-out">
      <div className="flex justify-between items-center p-8 md:px-16 vertical-align:middle items-center">
        <Title />
        <div>
          <div className="hidden md:block">
            <Nav />
          </div>
          <div className="md:hidden">
            <MobileSidebar />
          </div>
        </div>
      </div>
      <hr className="hidden md:block border-t-2 border-dotted border-[rgb(var(--foreground-rgb))] mt-[-20px]" />
    </header>
  );
}