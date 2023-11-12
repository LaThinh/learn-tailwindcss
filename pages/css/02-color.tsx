import LayoutCss from "@/components/layout/LayoutCss";
import * as React from "react";

export interface ITailWindProps {}

export default function TailWind02(props: ITailWindProps) {
  return (
    <LayoutCss title="Colors">
      <div>
        <p className="text-back">Tailwind CSS is awesome!</p>
        <p className="text-green-500">Tailwind CSS is awesome!</p>
        <p className="text-red-500">Tailwind CSS is awesome!</p>

        {/* background color */}
        <p className="text-white bg-slate-400">Tailwind CSS is awesome!</p>
        <p className="text-white bg-yellow-400">Tailwind CSS is awesome!</p>
        <p className="text-white bg-sky-500">Tailwind CSS is awesome!</p>

        {/* Text underline */}
        <p className="underline decoration-red-500">Tailwind CSS is awesome!</p>
        <p className="underline decoration-emerald-500">Tailwind CSS is awesome!</p>
        <p className="underline decoration-orange-500">Tailwind CSS is awesome!</p>

        {/* Border color */}
        <form className="form border rounded-lg border-gray-300 px-5 my-5 max-w-md">
          <fieldset className="flex flex-col gap-5 my-4 ">
            <legend className="rounded-md font-semibold mb-3">Form Login Demo</legend>
            <input type="text" className="border border-blue-400 rounded-md p-2" value="Email" />
            <input type="text" className="border border-blue-400 rounded-md p-2" value="Username" />
            <input type="text" className="border border-blue-400 rounded-md p-2" value="Password" />
          </fieldset>
        </form>

        {/* Shadown */}
        <div className="flex gap-4">
          <p>Shadow</p>
          <button className="shadow-lg bg-cyan-500 shadow-cyan-500 p-3 rounded-[20px] hover:bg-red-400">Apply</button>
          <button className="shadow-lg bg-cyan-500 shadow-purple-500/60">Subscribe</button>
          <button className="shadow-lg bg-green-500 px-4 py-2 text-white font-semibold rounded-[20px] shadow-gray-400 hover:bg-green-600">Subscribe</button>
        </div>

        {/* Arbitray Colors */}
        <div className="bg-[#455df7]">Hello</div>
      </div>
    </LayoutCss>
  );
}
