import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col"
      style={{ backgroundImage: "url(clipboard/images/bg-header-desktop.png)" }}
    >
      <div className="max-w-6xl mx-auto text-center mb-40 px-10">
        <div className="logo mx-auto my-10">
          <img src="clipboard/images/logo.svg" alt="Logo" className="mx-auto" />
        </div>

        <h1 className="section-title">A history of everything you copy</h1>

        <p className="section-content mb-10 text-2xl lg:text-3xl max-w-3xl mx-auto text-grayishBlue">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>

        <div className="button-container">
          <Link
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
          >
            Download for iOS
          </Link>
          <Link
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
          >
            Download for Mac
          </Link>
        </div>
      </div>
    </section>
  );
}
