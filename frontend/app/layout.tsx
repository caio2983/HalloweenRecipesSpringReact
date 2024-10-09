import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../pages/index";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="h-[75px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-1/2 gap-5">
          <div className="flex w-full justify-center gap-12 items-center">
            <span className="h-[34px] w-[64px] bg-[url('public/images/pumpkin.gif')]"></span>
            <h1>Halloween Recipes</h1>
            <span className="h-[34px] w-[64px] bg-[url('public/images/pumpkin.gif')] "></span>
          </div>
          <span className="h-px w-full bg-red-500"></span>
        </div>
        <Link href="/">Home </Link>
        <Link href="/Recipes">Recipes</Link>
      </header>

      {children}
    </>
  );
}
