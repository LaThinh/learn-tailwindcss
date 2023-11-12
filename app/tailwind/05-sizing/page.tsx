import LayoutCss from "@/components/layout/LayoutCss";
import React from "react";

export default function TailwindSizing() {
  return (
    <div className="block max-w-full overflow-x-auto">
      <h1 className="tailwind-title">Tailwind 05:Sizing</h1>
      <section>
        <div className="bg-black text-white my-2 w-0">w-0</div>
        <div className="bg-black text-white my-2 w-1">w-1</div>
        <div className="bg-black text-white my-2 w-1.5">w-1.5</div>
        <div className="bg-black text-white my-2 w-2">w-2</div>
        <div className="bg-black text-white my-2 w-3">w-3</div>
        <div className="bg-black text-white my-2 w-5">w-5</div>
        <div className="bg-black text-white my-2 w-6">w-6</div>
        <div className="bg-black text-white my-2 w-7">w-7</div>
        <div className="bg-black text-white my-2 w-8">w-8</div>
        <div className="bg-black text-white my-2 w-9">w-9</div>
        <div className="bg-black text-white my-2 w-10">w-10</div>
        <div className="bg-black text-white my-2 w-11">w-11</div>
        <div className="bg-black text-white my-2 w-12">w-12</div>

        <div className="bg-black text-white my-2 w-14">w-14</div>
        <div className="bg-black text-white my-2 w-16">w-16</div>

        <div className="bg-black text-white my-2 w-20">w-20</div>
        <div className="bg-black text-white my-2 w-24">w-24</div>
        <div className="bg-black text-white my-2 w-28">w-28</div>
        <div className="bg-black text-white my-2 w-32">w-32</div>
        <div>...</div>
        <div className="bg-black text-white my-2 w-36">w-36</div>

        <div className="bg-black text-white my-2 w-64">w-64</div>

        <div className="bg-black text-white my-2 w-80">w-80</div>
        <div className="bg-black text-white my-2 w-96">w-96</div>

        <div className="bg-black text-white my-2 w-auto">Auto</div>

        <div className="bg-green-500 text-white my-2 w-1/2">w-1/2</div>
        <div className="bg-green-500 text-white my-2 w-1/3">w-1/3</div>
        <div className="bg-green-500 text-white my-2 w-2/3">w-2/3</div>
        <div className="bg-green-500 text-white my-2 w-1/4">w-1/4</div>
        <div className="bg-green-500 text-white my-2 w-2/4">w-2/4</div>
        <div className="bg-green-500 text-white my-2 w-3/4">w-3/4</div>
        <div className="bg-green-500 text-white my-2 w-1/5">w-1/5</div>

        <div className="bg-purple-500 text-white my-2 w-screen">w-screen</div>

        <div className="bg-zinc-500 text-white my-2 w-full">w-full</div>

        <div className="bg-emerald-500 text-white my-2 w-min">w-min</div>
        <div className="bg-emerald-500 text-white my-2 w-max">w-max</div>

        <div className="bg-red-500 text-white my-2 w-[300px]">300px</div>

        <div className="bg-gray-100 max-w-lg mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          perferendis incidunt nihil ullam repellendus praesentium consectetur
          et sed distinctio, magni iusto quos repellat officiis cum dolore
          aliquid minus esse pariatur.
        </div>

        <div className="flex items-end">
          <div className="bg-orange-500 w-20 h-24">h-24</div>
          <div className="bg-orange-500 w-20 h-32">h-32</div>
          <div className="bg-orange-500 w-20 h-40">h-40</div>
          <div className="bg-orange-500 w-20 h-48">h-48</div>
          <div className="bg-orange-500 w-20 h-64">h-64</div>
          <div className="bg-orange-500 w-20 h-80">h-80</div>
        </div>

        <div className="h-48 bg-red-200">
          <div className="h-24 bg-red-600 min-h-full">Tailwind is awesome</div>
        </div>

        <div className="h-24 bg-orange-200">
          <div className="h-48 bg-orange-500 max-h-full">
            Tailwind is awesome
          </div>
        </div>

        <div className="h-screen bg-blue-300">Hello</div>
      </section>
    </div>
  );
}
