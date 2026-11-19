"use client";
import Link from "next/link";
import AuthSocialButtons from "@/app/components/AuthSocialButtons";
import React from "react";
import { signUp } from "@/lib/auth-client";
import toast from "react-hot-toast";

const inputClass =
  "w-full rounded-lg border border-[#DCE6DD] bg-white px-3 py-2.5 text-sm font-medium text-[#1D271F] outline-none placeholder:text-[#89958B] placeholder:font-normal transition focus:border-[#1D6B40] focus:ring-2 focus:ring-[#1D6B40]/10";

const SignUpPage = () => {
  const handleOnSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");

    // Validate passwords
    if (password !== confirmPassword) {
      toast.error("পাসওয়ার্ড দুটি মিলছে না!");
      return;
    }

    try {
      const { data, error } = await signUp.email({
        name,
        email,
        password,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "অ্যাকাউন্ট তৈরি করা যায়নি!");
        return;
      }

      toast.success(`স্বাগতম, ${data.user.name}!`, {
        duration: 4000,
      });
    } catch {
      toast.error("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন!");
    }
  };

  return (
    <main className="flex flex-col items-center justify-start bg-[#F0F5F0] px-4 pt-7 pb-10">
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-[#1D271F]">
          অ্যাকাউন্ট তৈরি করুন
        </h1>

        <p className="mt-1 text-xs font-medium text-[#657168]">
          নির্ভরযোগ্য দামে, বাজারের তুলনা ও ট্র্যাকিং পেতে অ্যাকাউন্ট খুলুন।
        </p>
      </div>

      <div className="w-full max-w-[340px] rounded-xl border border-[#DCE6DD] bg-[#FAFCFA] p-4 sm:p-5">
        <form className="space-y-3" onSubmit={handleOnSubmit}>
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-semibold text-[#1D271F]"
            >
              নাম
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="যেমন: রহিম উদ্দিন"
              required
              autoComplete="name"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-semibold text-[#1D271F]"
            >
              ইমেইল
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              autoComplete="email"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-semibold text-[#1D271F]"
            >
              পাসওয়ার্ড
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              required
              minLength={8}
              autoComplete="new-password"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1.5 block text-sm font-semibold text-[#1D271F]"
            >
              পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="আবার লিখুন"
              required
              minLength={8}
              autoComplete="new-password"
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#008C43] py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#007638] active:scale-[0.99]"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </form>

        <div className="my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#DCE6DD]" />
          <span className="text-xs font-medium text-[#657168]">অথবা</span>
          <div className="h-px flex-1 bg-[#DCE6DD]" />
        </div>

        <AuthSocialButtons />

        <p className="mt-4 text-center text-xs font-medium text-[#657168]">
          অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/signin"
            className="font-bold text-[#008C43] hover:underline"
          >
            সাইন ইন করুন
          </Link>
        </p>
      </div>

      <Link
        href="/"
        className="mt-5 text-xs font-medium text-[#89958B] transition hover:text-[#1D6B40]"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </main>
  );
};

export default SignUpPage;
