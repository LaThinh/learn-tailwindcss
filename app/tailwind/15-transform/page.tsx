import React from "react";

export default function TailwindColumns() {
  return (
    <div>
      <h1 className="tailwind-title">Tailwind Transition Transform</h1>
      <div>
        <button
          className="px-8 py-2 m-24 text-white rounded-sm bg-blue-500
        hover:bg-blue-700 "
        >
          Click me
        </button>

        <button
          className="px-8 py-2 m-24 text-white rounded-sm bg-blue-500
        hover:bg-blue-700 hover:opacity-20 transition duration-1000"
        >
          Click me
        </button>

        <button
          className="px-8 py-2 m-24 text-white rounded-sm bg-blue-500
        hover:bg-blue-700 hover:rotate-12 transition-transform duration-500"
        >
          Click me
        </button>

        <div>
          <img
            src="/assets/img/img1.jpg"
            alt=""
            className="w-48 hover:rotate-180 hover:scale-75 hover:skew-x-12
            transition duration-1000
            "
          />
        </div>
      </div>
    </div>
  );
}
