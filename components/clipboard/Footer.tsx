import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const footerLinks = [
    { title: "FAQs", url: "/faqs" },
    { title: "Privacy Policy", url: "/privacy" },
    { title: "Install Quide", url: "/install" },
    { title: "Contact Us", url: "/contact" },
    { title: "Press Kit", url: "/press-kit" },
  ];

  const footerSocialLinks = [
    {
      title: "Facebook",
      imageUrl: "/images/icon-facebook.svg",
      url: "http://facebook.com",
    },
    {
      title: "Twitter",
      imageUrl: "/images/icon-twitter.svg",
      url: "http://twitter.com",
    },
    {
      title: "Instagram",
      imageUrl: "/images/icon-instagram.svg",
      url: "http://instagram.com",
    },
  ];
  return (
    <footer className="bg-gray-50">
      <div className="section-container">
        <div className="flex flex-col gap-8 md:flex-row items-center justify-between w-full">
          <div className="footer-logo">
            <img src="/clipboard/images/logo.svg" alt="" className="scale-50" />
          </div>
          <div className="footer-links flex flex-wrap gap-4 gap-y-2 text-center justify-center">
            {footerLinks.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                title={item.title}
                className="text-grayishBlue hover:text-strongCyan"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="footer-socials flex gap-4 items-center justify-center">
            {footerSocialLinks.map((item, index) => (
              <Link key={index} href={item.url} title={item.title}>
                <Image
                  src={`/clipboard/${item.imageUrl}`}
                  alt={item.title}
                  width={24}
                  height={24}
                  className="fill-icon duration-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
