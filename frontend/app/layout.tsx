import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../pages/index";
import Link from "next/link";
import Image from "next/image";

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
      <header className="h-[10vh] flex items-center justify-between  px-[32px] border-b-2 border-darkPurple">
        <div className="flex w-full justify-center gap-[4px] items-center w-auto">
          <h1 className="text-2xl whitespace-nowrap m-0">Halloween Recipes</h1>
          <span className="h-[34px] w-[64px]  relative">
            <Image
              src="/images/pumpkin.gif"
              fill
              objectFit="cover"
              alt="pumpkin gif"
            ></Image>
          </span>
        </div>

        <span className="flex gap-[16px] items-center">
          <Link href="/">Home </Link>
          <Link href="/Recipes">Recipes</Link>
        </span>
      </header>

      {children}
    </>
  );
}
