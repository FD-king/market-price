import { signIn } from "@/lib/auth-client";
import { Icon } from "@iconify/react";

const AuthSocialButtons = () => {
  const handleGoogleSignIn = async () => {
    const data = await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const handleGithubSignIn = async () => {
    const data = await signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  };
  return (
    <div className="grid grid-cols-2 gap-2">
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="flex min-w-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-[#DCE6DD] bg-white px-1.5 py-3 text-[10px] font-semibold text-[#1D271F] transition hover:bg-[#F0F5F0] sm:text-[11px]"
      >
        <Icon icon="devicon:google" />
        Google দিয়ে চালিয়ে যান
      </button>

      <button
        type="button"
        onClick={handleGithubSignIn}
        className="flex min-w-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-[#DCE6DD] bg-white px-1.5 py-3 text-[10px] font-semibold text-[#1D271F] transition hover:bg-[#F0F5F0] sm:text-[11px]"
      >
        <Icon icon="mdi:github" />
        GitHub দিয়ে চালিয়ে যান
      </button>
    </div>
  );
};

export default AuthSocialButtons;
