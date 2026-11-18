const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-[#FCFDFB]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-7 text-center sm:flex-row sm:gap-4 sm:px-6 sm:text-left">
        {/* Left Side */}
        <p className="text-sm font-medium text-[#26352B] sm:text-base">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        {/* Right Side */}
        <p className="text-xs text-gray-600 sm:text-sm">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
};

export default Footer;
