import Link from "next/link";
import React from "react";

export default function ImageGallery() {
  const menu = ["Vector", "Illustrator", "Images", "Icons"];

  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
  ];

  return (
    <div>
      {/* Global background */}
      <div className="flex items-center justify-center min-h-screen bg-cyan-50">
        {/* Card */}
        <div className="card-container w-full mx-auto max-w-7xl bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-10">
          <div
            className="flex flex-col items-center justify-center space-y-3 
                        gap-6 md:mb-24 md:justify-end"
          >
            {/* Menu Container */}
            <div
              className="menu w-full flex flex-col items-center justify-center gap-3 
            md:mb-4 sm:flex-row md:justify-end md:gap-5"
            >
              {menu.map((item, index) => (
                <div className="group relative" key={index}>
                  <Link href="#" className="group-hover:text-blue-500">
                    {item}
                  </Link>
                  <div
                    className="border duration-500 w-0 border-b-2 absolute -bottom-2 opacity-0 left-[50%] border-black -translate-x-[50%]
                  group-hover:opacity-100 group-hover:w-full
                  "
                  ></div>
                </div>
              ))}
            </div>

            {/* Search Container */}
            <div className="search-container flex flex-col w-full justify-between gap-5 md:flex-row">
              {/* Input container */}
              <div className="flex justify-between border-b">
                <input
                  type="text"
                  className="ml-6 border-none border-gray-200 md:w-80 
                  placeholder:font-thin focus:outline-none"
                  placeholder="Search"
                />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 text-gray-300 duration-200 hover:scale-110"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                  </svg>
                </button>
              </div>

              {/* Upload Button */}
              <button className="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black">
                Upload
              </button>
            </div>

            {/* Gallery Container */}
            <div className="gallery-container grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {images.map((img, index) => (
                <div className="relative group overflow-hidden" key={index}>
                  <img src={`/assets/images/${img}`} alt="" />
                  <div
                    className="absolute -bottom-10 left-0 right-0 p-2 px-4 text-white
                  duration-300 bg-black opacity-0 group-hover:opacity-100 bg-opacity-70
                  group-hover:bottom-0"
                  >
                    <div className="flex justify-between w-full">
                      <div className="font-normal">
                        <p className="text-sm">Abstract Painting</p>
                        <p className="text-xs">245 Likes</p>
                      </div>
                      <div className="flex items-center">
                        <img src="/assets/images/bookmark.svg" alt="bookmark" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
