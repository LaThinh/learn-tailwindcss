"use client";
import React, { useEffect } from "react";

export default function TailwindBreakpoint() {
  const showBrowserWidth = () => {
    const browserWidth = window.innerWidth;
    const widthElm = document.querySelector("h3");
    if (widthElm) widthElm.innerHTML = `Width: ${browserWidth}`;
  };

  useEffect(() => {
    showBrowserWidth;
  }, []);

  window.onload = showBrowserWidth;
  window.onresize = showBrowserWidth;
  return (
    <div className="">
      <h1 className="tailwind-title">TailwindBreakpoint</h1>
      <div className="mt-20 p-10 text-center bg-black  text-white sm:bg-green-400 md:bg-blue-500 lg:text-gray-700  lg:bg-orange-500 xl:bg-yellow-200">
        <h3 className="text-2xl   "></h3>
      </div>
    </div>
  );
}
