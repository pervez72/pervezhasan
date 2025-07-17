"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          ThinkWithPervez
        </Link>

        {/* Desktop Menu: Horizontal on md+ screens */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2 flex flex-col gap-3">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      )}
    </nav>
  );
}