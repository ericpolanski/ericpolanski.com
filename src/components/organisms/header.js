"use client";
import MobileSidebar from "../molecules/header/mobile-sidebar";
import Nav from "../molecules/header/nav";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-50">
      <div className="flex justify-between items-center p-8 md:px-16 vertical-align:middle items-center">
      <Link href="/" className="group hover:text-gray-500 transition-colors duration-300 flex items-center">
        <Image
          src="../eraser.svg"
          alt="Eric logo"
          width={40}
          height={40}
          className="group-hover:grayscale transition duration-300"
        />
        <h1
          className="group-hover:text-gray-500 transition duration-300"
          style={{ fontFamily: 'Doto, sans-serif', fontSize: '2.5rem', fontWeight: 800, marginTop: '5px', marginLeft: '10px' }}
        >
          Eric Polanski
        </h1>
      </Link>
        <div>
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