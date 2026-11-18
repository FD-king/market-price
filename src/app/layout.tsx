import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Suspense } from "react";

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
      lang="en"
      className={`${NotoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div>
          <nav>
            <Suspense>
              <NavBar />
            </Suspense>
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
