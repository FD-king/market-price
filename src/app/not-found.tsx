"use client";
import Link from "next/link";
import {
  IoHomeOutline,
  IoArrowBackOutline,
  IoSearchOutline,
} from "react-icons/io5";

const NotFound = () => {
  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-[#F0F5F0] px-4 py-12">
      <div className="mx-auto flex w-full max-w-md flex-col items-center text-center">
        {/* 404 Illustration */}
        <div className="relative mb-6 flex h-36 w-36 items-center justify-center rounded-full bg-[#E1EFE4]">
          <span className="text-6xl font-extrabold tracking-tighter text-[#008C43]">
            404
          </span>

          <div className="absolute -right-1 top-3 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#F0F5F0] bg-[#008C43] text-white">
            <IoSearchOutline className="text-xl" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold tracking-tight text-[#1D271F] sm:text-3xl">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-[#657168]">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যাচ্ছে না। পেজটি সরানো
          হয়েছে অথবা ঠিকানাটি ভুল হতে পারে।
        </p>

        {/* Buttons */}
        <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:flex-row">
          {/* Go Home */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-lg bg-[#008C43] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#007638] active:scale-[0.98]"
          >
            <IoHomeOutline className="text-base" />
            হোম পেজে ফিরে যান
          </Link>

          {/* Go Back */}
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 rounded-lg border border-[#DCE6DD] bg-[#FAFCFA] px-6 py-3 text-sm font-semibold text-[#26352B] transition hover:bg-white active:scale-[0.98]"
          >
            <IoArrowBackOutline className="text-base" />
            আগের পেজে যান
          </button>
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-xs font-medium text-[#89958B]">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>
      </div>
    </main>
  );
};

export default NotFound;
