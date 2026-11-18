import Image from "next/image";
import { connection } from "next/server";
import NavList from "./NavList";
import Marquee from "./Marquee";
import SignInSignUpButton from "./SignInSignUpButton";
import IcategoriesTypeForNavBar from "@/types/categoriesTypeForNavBar";
import Link from "next/link";

const NavBar = async () => {
  await connection();

  const today = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  });

  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );

  const categories: IcategoriesTypeForNavBar[] = await res.json();

  return (
    <header className="w-full bg-[#FCFDFB]">
      <NavList categories={categories}>
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src="/favicon.ico"
            alt="Logo"
            height={40}
            width={40}
            className="h-9 w-9 rounded-xl"
          />

          <div>
            <h2 className="text-base font-bold text-[#17251B]">বাজার দর</h2>
            <span className="text-[9px] text-gray-500">{today}</span>
          </div>
        </Link>

        <SignInSignUpButton />
      </NavList>

      <section className="overflow-hidden border-y border-gray-200">
        <Marquee />
      </section>
    </header>
  );
};

export default NavBar;
