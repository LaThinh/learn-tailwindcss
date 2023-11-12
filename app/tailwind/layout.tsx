"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menuLession = [
  { name: "Lesson 01 Alert Box", link: "/tailwind/01-first" },
  { name: "Lesson 02 Color", link: "/tailwind/02-color" },
  { name: "Lesson 03 Container", link: "/tailwind/03-container" },
  { name: "Lesson 04 Typography", link: "/tailwind/04-typography" },
  { name: "Lesson 05 Sizing", link: "/tailwind/05-sizing" },
  { name: "Lesson 06 Position", link: "/tailwind/06-position" },
  { name: "Lesson 07 Background", link: "/tailwind/07-background" },
  { name: "Lesson 08 Border Radius", link: "/tailwind/08-border-radius" },
  { name: "Lesson 09 Filters", link: "/tailwind/09-filters" },
  { name: "Lesson 10 Interactivity", link: "/tailwind/10-interactivity" },
  { name: "Lesson 11 Breakpoint", link: "/tailwind/11-breakpoint" },
  { name: "Lesson 12 Columns", link: "/tailwind/12-columns" },
  { name: "Lesson 13 Flex", link: "/tailwind/13-flex" },
  { name: "Lesson 14 Grid", link: "/tailwind/14-grid" },
  { name: "Lesson 15 Transform", link: "/tailwind/15-transform" },
  { name: "Lesson 16 Animation", link: "/tailwind/16-animation" },
  { name: "Lesson 17 Customization", link: "/tailwind/17-customization" },
  { name: "Lesson 18 Dark  Mode", link: "/tailwind/18-dark-mode" },
];

export default function TailwindLayout({
  children, // will be a page or nested layout
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const path = usePathname();

  return (
    <section>
      <main
        className="flex flex-col 
            z-10 mx-auto
            lg:flex-row lg:items-start
            min-h-screen gap-10 p-5 max-w-7xl w-full"
      >
        <div
          className="sidebar bg-green-100 shadow-md
            sticky top-[100px]  h-auto overflow-auto max-h-[80vh]
            border-1 border-gray-400 hidden
            lg:min-w-[200px] lg:w-[20%] lg:max-w-[240px] lg:block"
        >
          <ul className="flex flex-col">
            {menuLession.map((item, index) => (
              <li
                className={`bg-slate-700 text-white p-0 
                  border-b-2 border-white cursor-pointer
                
                  ${path === item.link ? "!bg-blue-500" : "hover:bg-blue-400"}
                  `}
                key={index}
              >
                <Link className="flex w-full p-3" href={item.link}>
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
            border border-gray-300 rounded-2xl max-w-full"
        >
          {children}
        </div>
      </main>
    </section>
  );
}
