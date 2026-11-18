import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";

const HeroSection = async () => {
  await connection();

  const today = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  });

  return (
    <section className="bg-[#F0F5F0] px-4 py-5 sm:px-6 sm:py-7">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-4 rounded-[22px] border border-[#E1EAE1] bg-[#FCFDFB] px-5 py-5 sm:grid-cols-[3fr_2fr] sm:gap-5 sm:px-8 sm:py-7">
        {/* Date Badge */}
        <span className="row-start-1 justify-self-center rounded-full bg-[#E1F2E8] px-3 py-1 text-[10px] font-medium text-[#078B43] sm:col-start-1 sm:justify-self-start sm:text-xs">
          {today}
        </span>

        {/* Heading */}
        <h1 className="row-start-2 text-center text-2xl font-extrabold leading-tight tracking-tight text-[#202B23] sm:col-start-1 sm:text-left sm:text-3xl lg:text-4xl">
          আজকের বাজারের দাম এক নজরে
        </h1>

        {/* Illustration */}
        <div className="row-start-3 flex items-center justify-center sm:col-start-2 sm:row-start-1 sm:row-span-4 sm:justify-end">
          <Image
            src="/bazar-hero.png"
            alt="বাজারের পণ্যের ঝুড়ি"
            width={315}
            height={263}
            priority
            className="h-auto w-36 object-contain sm:w-52 lg:w-64"
          />
        </div>

        {/* Description */}
        <p className="row-start-4 text-center text-sm leading-relaxed text-gray-500 sm:col-start-1 sm:row-start-3 sm:text-left sm:text-sm">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিশ্লেষণ, দ্রুত, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        {/* CTA Button */}
        <Link
          href="#all-products" // this is for the hook to home page all products.
          className="row-start-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#078B43] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-green-900/20 transition-all hover:bg-[#067638] sm:col-start-1 sm:row-start-4 sm:w-fit sm:rounded-md sm:px-5 sm:py-2.5"
        >
          সব পণ্য দেখুন
          <span className="text-lg">→</span>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
