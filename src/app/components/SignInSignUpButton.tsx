import Link from "next/link";

const SignInSignUpButton = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {/* Sign In */}
      <Link
        href="/signin"
        className="rounded-lg px-3 py-2 text-xs font-medium text-[#17251B] transition-colors hover:bg-gray-100 sm:px-4 sm:text-sm"
      >
        সাইন ইন
      </Link>

      {/* Sign Up */}
      <Link
        href="/signup"
        className="rounded-lg bg-[#078B43] px-3 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#067638] hover:shadow-md sm:px-4 sm:text-sm"
      >
        সাইন আপ
      </Link>
    </div>
  );
};

export default SignInSignUpButton;
