import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Suspense } from "react";
import Footer from "./components/Footer";

const NotoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "Website to view price of different items",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      className={`${NotoSerifBengali.className} min-h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#f0f5f0]">
        {/* Navbar */}
        <nav className="sticky top-0 z-50">
          <Suspense>
            <NavBar />
          </Suspense>
        </nav>

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
