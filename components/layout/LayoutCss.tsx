import Link from "next/link";
import Header from "./Header";
import RootLayout from "@/app/layout";

const menuLession = [
  { name: "Lesson 01 Alert Box", link: "/css/01-first" },
  { name: "Lesson 02 Color", link: "/css/02-color" },
  { name: "Lesson 03 Container", link: "/css/03-container-spacing" },
  { name: "Lesson 04 Typography", link: "/css/04-typography" },
  { name: "Lesson 05", link: "/css/05" },
  { name: "Lesson 06", link: "css/06" },
  { name: "Lesson 07", link: "css/07" },
  { name: "Lesson 08", link: "css/08" },
  { name: "Lesson 09", link: "css/09" },
];

export default function LayoutCss({
  children, // will be a page or nested layout
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <Header />
      <main
        className="flex flex-col 
            z-10
            lg:flex-row lg:items-start
            min-h-screen gap-10 p-5"
      >
        <div
          className="sidebar bg-green-100 shadow-md
            sticky top-[100px]  h-auto hidden
            border-1 border-gray-400 rounded-s-2xl
            lg:min-w-[200px] lg:w-[20%] lg:max-w-[240px] lg:block"
        >
          <ul className="flex flex-col">
            {menuLession.map((item, index) => (
              <li
                className="bg-slate-700 text-white p-3 
                  border-b-2 border-white cursor-pointer
                  hover:bg-green-500
                  "
                key={index}
              >
                <Link className="flex w-full" href={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="main contain 
            p-5 bg-gradient-to-br from-white to-gray-200
            flex-1 min-h-[1200px]
            border border-gray-300 rounded-2xl "
        >
          <h1
            className="text-4xl  h-20  mb-4 border-b border-gray-300
            flex justify-center items-center text-center rounded-xl
            bg-gradient-to-br from-lime-200 from-5% via-lime-300 via-20% to-lime-600
            text-white"
          >
            {title ? title : "Tailwind CSS"}{" "}
          </h1>
          {children}
        </div>
      </main>
    </>
  );
}
