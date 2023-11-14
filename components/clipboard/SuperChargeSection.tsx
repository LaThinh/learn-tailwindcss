import Image from "next/image";
import React from "react";

export default function SuperChargeSection() {
  const supperChargeData = [
    {
      img: "/images/icon-blacklist.svg",
      name: "Create Blacklists",
      desc: "Easily search your snippets by content, category, web address, application, and more.",
    },
    {
      img: "/images/icon-text.svg",
      name: "Plain Text Snippets",
      desc: "Remove unwanted formatting from copied text for a consistent look.",
    },
    {
      img: "/images/icon-preview.svg",
      name: "Sneak Preview",
      desc: "Quick preview of all snippets on your Clipboard for easy access.",
    },
  ];
  return (
    <section id="supper-charge">
      <div className="section-container">
        <h3 className="section-title">Supercharge your workflow</h3>
        <p className="section-content">
          {"We've got the tools to boost your productivity."}
        </p>

        <div className="supper-charge-items w-full my-8 flex flex-col md:flex-row gap-6 md:justify-between">
          {supperChargeData.map((item, index) => (
            <div
              key={index}
              className="charge-item flex flex-col gap-5 text-center items-center"
            >
              <Image
                src={`clipboard/${item.img}`}
                alt={item.name}
                width={50}
                height={50}
              />
              <h5 className="text-2xl font-bold text-darkGrayishBlue">
                {item.name}
              </h5>
              <p className="text-grayishBlue">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
