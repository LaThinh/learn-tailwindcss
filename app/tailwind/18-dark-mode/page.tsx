"use client";

import React, { useState } from "react";

export default function TailwindColumns() {
  // document.getElementById('toggle').addEventListener('change', function () {

  // })

  const [isChecked, setIsChecked] = useState(false);

  const changeTheme = (event: any) => {
    console.log("ON click");
    const check = event.target.value;

    //setIsChecked(!isChecked);

    if (event.target.value == "on") {
      document.documentElement.classList.add("dark");
      setIsChecked(true);
      event.target.value = "off";
    } else {
      document.documentElement.classList.remove("dark");
      setIsChecked(false);
      event.target.value = "on";
    }
  };

  return (
    <div>
      <h1 className="tailwind-title">Tailwind Dark Mode</h1>
      <div className="container mx-auto mt-10 bg-white dark:bg-slate-900 text-slate-800 dark:text-white">
        test dark mode
        <h3 className="text-slate-900 dark:text-white">Lorem test h3</h3>
      </div>

      <div className="relative inline-block w-10 mr-2 ml-6 mt-6 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          checked={isChecked}
          onClick={changeTheme}
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
    </div>
  );
}
