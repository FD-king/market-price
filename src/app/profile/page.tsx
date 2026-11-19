"use client";
import { authClient, useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { IoReturnDownBack } from "react-icons/io5";

const ProfilePage = () => {
  const { data: session, error } = useSession();
  const user = session?.user;

  const handleProfileUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newUserInfo = Object.fromEntries(formData.entries()) as {
      name: string;
    };

    const { error } = await authClient.updateUser({
      name: newUserInfo.name,
    });

    if (error) {
      console.error("Profile update failed:", error);
      return;
    }
  };

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.error("Signed Out");
  };
  return (
    <main className="min-h-full bg-[#F0F5F0] px-4 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[490px]">
        {/* Page Heading */}
        <div className="mb-5">
          <h1 className="text-xl font-bold tracking-tight text-[#1D271F]">
            আমার প্রোফাইল
          </h1>

          <p className="mt-1 text-xs font-medium text-[#657168]">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* User Profile Card */}
        <div className="mb-4 flex items-center justify-between gap-3 rounded-xl border border-[#DCE6DD] bg-[#FAFCFA] p-4">
          {/* User Information */}
          <div className="flex min-w-0 items-center gap-3">
            {/* Avatar Placeholder */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#DCE9DF] text-base font-bold text-[#008C43]">
              {user?.name[0]}
              {user?.name[1]}
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-sm font-bold text-[#1D271F]">
                {user?.name}
              </h2>

              <p className="mt-0.5 truncate text-xs font-medium text-[#657168]">
                {user?.email}
              </p>
            </div>
          </div>

          {/* Sign Out Button */}
          <button
            type="button"
            onClick={() => handleSignOut()}
            className="flex shrink-0 items-center gap-1 rounded-md border border-red-400 px-2.5 py-2 text-[11px] font-semibold text-red-500 transition hover:bg-red-50"
          >
            <IoReturnDownBack className="text-sm" />
            সাইন আউট
          </button>
        </div>

        {/* Profile Information Form */}
        <div className="rounded-xl border border-[#DCE6DD] bg-[#FAFCFA] p-4 sm:p-5">
          <h2 className="mb-6 text-sm font-bold text-[#1D271F]">তথ্য</h2>

          <form onSubmit={handleProfileUpdate} className="space-y-3">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-xs font-semibold text-[#26352B]"
              >
                নাম
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="আপনার নাম লিখুন"
                defaultValue={`${user?.name}`}
                className="w-full rounded-lg border border-[#DCE6DD] bg-transparent px-3 py-2.5 text-sm font-medium text-[#1D271F] outline-none transition placeholder:text-[#89958B] focus:border-[#008C43] focus:ring-2 focus:ring-[#008C43]/10"
              />
            </div>

            {/* Update Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#008C43] py-2.5 text-xs font-bold text-white shadow-[0_2px_3px_rgba(0,0,0,0.2)] transition hover:bg-[#007638] active:scale-[0.99]"
            >
              আপডেট
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
