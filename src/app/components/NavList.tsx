"use client";

import IcategoriesTypeForNavBar from "@/types/categoriesTypeForNavBar";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";

interface Props {
  categories: IcategoriesTypeForNavBar[];
  children: React.ReactNode;
}

const NavList = ({ categories, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div>
      {/* Top Navbar */}
      <div className="relative mx-auto flex max-w-6xl items-center gap-3 px-3 py-2.5 sm:px-6">
        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-[#078B43] md:hidden"
        >
          <HiMenuAlt2 />
        </button>

        {/* Logo and Auth Buttons */}
        <div className="flex flex-1 items-center justify-between">
          {children}
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <nav className="absolute left-0 top-full z-50 w-full bg-white p-3 shadow-lg md:hidden">
            <div className="grid grid-cols-2 gap-2">
              {categories.map((item) => (
                <Link
                  key={item.id}
                  href={`/category/${item.slug}`}
                  onClick={() => {
                    setActiveCategory(item.slug);
                    setIsOpen(false);
                  }}
                  className={`rounded-md px-3 py-2 text-sm ${
                    activeCategory === item.slug
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.icon} {item.nameBn}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>

      {/* Desktop Categories */}
      <nav className="hidden items-center justify-center gap-5 border-t border-gray-100 py-3 md:flex">
        {categories.map((item) => (
          <Link
            key={item.id}
            href={`/category/${item.slug}`}
            onClick={() => setActiveCategory(item.slug)}
            className={`rounded-md px-3 py-1.5 text-sm ${
              activeCategory === item.slug
                ? "bg-green-50 font-semibold text-green-700"
                : "text-gray-700 hover:text-green-700"
            }`}
          >
            {item.icon} {item.nameBn}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavList;
