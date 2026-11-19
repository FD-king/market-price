"use client";
import Link from "next/link";
import AuthSocialButtons from "@/app/components/AuthSocialButtons";
import { signIn } from "@/lib/auth-client";

const inputClass =
  "w-full rounded-lg border border-[#DCE6DD] bg-white px-3 py-2.5 text-sm font-medium text-[#1D271F] outline-none placeholder:text-[#89958B] placeholder:font-normal transition focus:border-[#1D6B40] focus:ring-2 focus:ring-[#1D6B40]/10";

const SignInPage = () => {
  const handleOnSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };
    const { data: resData, error } = await signIn.email({
      ...data,
    });
  };
  return (
    <main className="flex flex-col items-center justify-start bg-[#F0F5F0] px-4 pt-7 pb-10">
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-[#1D271F]">
          সাইন ইন
        </h1>

        <p className="mt-1 text-xs font-medium text-[#657168]">
          নির্ভরযোগ্য দাম, বাজারের তুলনা ও ট্র্যাকিং পেতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>
      <div className="w-full max-w-[340px] rounded-xl border border-[#DCE6DD] bg-[#FAFCFA] p-4 sm:p-5">
        <form onSubmit={handleOnSubmit} className="space-y-3">
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
              autoComplete="current-password"
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#008C43] py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#007638] active:scale-[0.99]"
          >
            সাইন ইন
          </button>
        </form>

        <div className="my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#DCE6DD]" />
          <span className="text-xs font-medium text-[#657168]">অথবা</span>
          <div className="h-px flex-1 bg-[#DCE6DD]" />
        </div>

        <AuthSocialButtons />

        <p className="mt-4 text-center text-xs font-medium text-[#657168]">
          অ্যাকাউন্ট নেই?{" "}
          <Link
            href="/signup"
            className="font-bold text-[#008C43] hover:underline"
          >
            সাইন আপ করুন
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

export default SignInPage;
