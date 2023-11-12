import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MiniProjectPage() {
  return (
    <div className="w-full min-h-[80vh] bg-blue-100 p-3 lg:p-5">
      <div className="w-full mx-auto max-w-7xl border min-h-screen rounded-xl">
        <h1 className="text-gradient mb-8 font-bold text-center">
          Tailwind CSS - Thinh La
        </h1>
        <div className="grid grid-cols-1 p-4 lg:p-8 lg:grid-cols-2 gap-8 child:border bg-white rounded-xl">
          <div className="project">
            <h2 className="project-title">Tailwind Css</h2>
            <div className="project-content">
              <Link
                href="/tailwind/09-filters"
                className="block overflow-hidden w-full h-[360px]"
              >
                <Image
                  src="/assets/images/tailwind-css.png"
                  width="600"
                  height="300"
                  alt="Login Modal"
                  className="object-cover w-full h-[360px] hover:scale-110 transition-all duration-500"
                />
              </Link>
            </div>
          </div>

          <div className="project">
            <h2 className="project-title">Project: Image Gallery</h2>
            <div className="project-content">
              <Link
                href="/mini-project/image-gallery"
                className="block overflow-hidden w-full h-[360px]"
              >
                <Image
                  src="/assets/images/image-gallery.png"
                  width="600"
                  height="300"
                  alt="Email Subscribe Card"
                  className="object-cover max-w-[120%] w-[110%] -ml-[5%] h-[360px] hover:scale-110 transition-all duration-500"
                />
              </Link>
            </div>
          </div>

          <div className="project">
            <h2 className="project-title">Project 01: Email Subscribe Card</h2>
            <div className="project-content">
              <Link
                href="/mini-project/email-subscribe"
                className="block overflow-hidden w-full h-[360px]"
              >
                <Image
                  src="/assets/images/email-subscribe.png"
                  width="600"
                  height="300"
                  alt="Email Subscribe Card"
                  className="object-cover w-full  h-[360px] hover:scale-110 transition-all duration-500"
                />
              </Link>
            </div>
          </div>
          <div className="project">
            <h2 className="project-title">Project 02: Pricing Card</h2>
            <div className="project-content">
              <Link
                href="/mini-project/pricing-cards"
                className="block overflow-hidden w-full h-[360px]"
              >
                <Image
                  src="/assets/images/pricing-cards.png"
                  width="600"
                  height="300"
                  alt="Email Subscribe Card"
                  className="object-cover w-full  h-[360px] hover:scale-110 transition-all duration-500"
                />
              </Link>
            </div>
          </div>

          <div className="project">
            <h2 className="project-title">Project 03: Product Modal</h2>
            <div className="project-content">
              <Link
                href="/mini-project/product-modal"
                className="block overflow-hidden w-full h-[360px]"
              >
                <Image
                  src="/assets/images/product-modal.png"
                  width="600"
                  height="300"
                  alt="Email Subscribe Card"
                  className="object-cover w-full  h-[360px] hover:scale-110 transition-all duration-500"
                />
              </Link>
            </div>
          </div>

          <div className="project">
            <h2 className="project-title">Project 04: Login Modal</h2>
            <div className="project-content">
              <Link
                href="/mini-project/login-modal"
                className="block overflow-hidden w-full h-[360px]"
              >
                <Image
                  src="/assets/images/login-modal.png"
                  width="600"
                  height="300"
                  alt="Login Modal"
                  className="object-cover w-full h-[360px] hover:scale-110 transition-all duration-500"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
