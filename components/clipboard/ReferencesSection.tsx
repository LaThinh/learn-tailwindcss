import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ReferencesSection() {
  const referencesData = [
    { name: "Google", imageUrl: "logo-google.png" },
    { name: "IBM", imageUrl: "logo-ibm.png" },
    { name: "Microsoft", imageUrl: "logo-microsoft.png" },
    { name: "HP", imageUrl: "logo-hp.png" },
    { name: "Vector Graphics", imageUrl: "logo-vector-graphics.png" },
  ];
  return (
    <section className="section-container my-20 py-12 bg-blue-50 rounded-3xl">
      <h3 className="section-title">References</h3>
      <div
        className="slider my-12 flex w-full items-center flex-col gap-12 md:flex-row md:gap-20 md:justify-center md:items-center
      md:flex-wrap lg:gap-5 lg:flex-nowrap lg:justify-between
      "
      >
        {referencesData.map((item, index) => (
          <div key={index} className="item">
            <Link href={"#"}>
              <Image
                src={`/clipboard/images/${item.imageUrl}`}
                alt={item.name}
                width={180}
                height={50}
                className="max-w-full object-cover w-auto hover:grayscale hover:scale-110 duration-300"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
