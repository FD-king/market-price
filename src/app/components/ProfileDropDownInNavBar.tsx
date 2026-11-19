"use client";

import { useRef, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { IoPersonOutline, IoReturnDownBack } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import toast from "react-hot-toast";

interface ProfileDropDownProps {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
}

const ProfileDropDownInNavBar = ({ user }: ProfileDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.error("Signed Out");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Navbar User Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-gray-100"
      >
        {/* Avatar */}
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DCE9DF] text-sm font-bold text-[#008C43]">
          {user?.name[0]}
          {user?.name[1]}
        </div>

        <span className="max-w-[100px] truncate text-xs font-semibold text-[#26352B] sm:text-sm">
          {user.name}
        </span>

        {isOpen ? <FaChevronDown /> : <FaChevronUp />}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute right-0 top-full z-[100] mt-2 w-[260px] origin-top-right rounded-xl border border-[#DCE6DD] bg-[#FAFCFA] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.15)] animate-in fade-in slide-in-from-top-2 duration-150">
          {/* User Information */}
          <div className="border-b border-[#E6ECE6] pb-3">
            <p className="truncate text-sm font-bold text-[#1D271F]">
              {user.name}
            </p>

            <p className="mt-0.5 truncate text-xs font-medium text-[#657168]">
              {user.email}
            </p>
          </div>

          {/* Profile Link */}
          <Link
            href="/profile"
            onClick={() => setIsOpen(false)}
            className="mt-2 flex items-center gap-2 rounded-lg px-1 py-2 text-sm font-medium text-[#26352B] transition hover:bg-[#F0F5F0]"
          >
            <IoPersonOutline className="text-base text-[#657168]" />
            আমার প্রোফাইল
          </Link>

          {/* Sign Out */}
          <button
            type="button"
            onClick={handleSignOut}
            disabled={isSigningOut}
            className="flex w-full items-center gap-2 rounded-lg px-1 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <IoReturnDownBack className="text-base" />
            {isSigningOut ? "সাইন আউট হচ্ছে..." : "সাইন আউট"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDownInNavBar;
