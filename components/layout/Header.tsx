import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface IHeaderProps {}

const menus = [
  // { name: "Home", url: "/home" },
  { name: "TailWind CSS", url: "/tailwind/09-filters" },
  { name: "Mini Project", url: "/mini-project" },
];
export default function Header(props: IHeaderProps) {
  return (
    <>
      <div className="header shadow-md sticky top-0 z-50 bg-white">
        <div className="top-header flex justify-between max-w-7xl m-auto px-5 py-5 align-middle items-center">
          <Link href="/" className="flex gap-3">
            <Image
              src="/logo.svg"
              alt="Tailwind Css Logo"
              className="dark:invert"
              width={48}
              height={32}
              priority
            />
            <Image
              src="/next.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Link>
          <nav className="nav flex flex-row list-none gap-10">
            {menus.map((item, index) => (
              <li key={index}>
                <Link
                  className="text-black text-[18px] hover:text-green-500  font-semibold"
                  href={item.url}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </nav>
          <div className="right-login">
            <ul>
              <Link href="login">La Quoc Thinh</Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
