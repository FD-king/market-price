"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import ProfileDropDownInNavBar from "./ProfileDropDownInNavBar";

const SignInSignUpButton = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return <div className="h-9 w-24 animate-pulse rounded-lg bg-gray-100" />;
  }

  return (
    <div>
      {user ? (
        <ProfileDropDownInNavBar user={user} />
      ) : (
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/signin"
            className="rounded-lg px-3 py-2 text-xs font-semibold text-[#17251B] transition-colors hover:bg-gray-100 sm:px-4 sm:text-sm"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-[#078B43] px-3 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#067638] hover:shadow-md sm:px-4 sm:text-sm"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default SignInSignUpButton;
