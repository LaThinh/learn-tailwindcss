import Header from "@/components/layout/Header";
import Link from "next/link";
import * as React from "react";

export interface ICSSProps {}

const cssLession = [
  { name: "Lesson 01", link: "css/01" },
  { name: "Lesson 02", link: "css/02" },
  { name: "Lesson 03", link: "css/03" },
  { name: "Lesson 04", link: "css/04" },
  { name: "Lesson 05", link: "css/05" },
  { name: "Lesson 06", link: "css/06" },
  { name: "Lesson 07", link: "css/07" },
  { name: "Lesson 08", link: "css/08" },
  { name: "Lesson 09", link: "css/09" },
];

export default class CSS extends React.PureComponent<ICSSProps> {
  public render() {
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
            sticky top-[100px]  h-auto
            border-1 border-gray-400 rounded-s-2xl
            lg:min-w-[200px] lg:w-[20%] lg:max-w-[240px]"
          >
            <ul className="flex flex-col">
              {cssLession.map((item, index) => (
                <li
                  className="bg-slate-700 text-white p-3 
                  border-b-2 border-white cursor-pointer
                  hover:bg-green-500
                  "
                  key={index}
                >
                  <Link href={item.link}>{item.name}</Link>
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
            <h2 className="text-4xl text-lime-700">Tailwild CSS</h2>
          </div>
        </main>
      </>
    );
  }
}
