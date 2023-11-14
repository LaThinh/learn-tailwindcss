import Image from "next/image";
import React from "react";

export default function FeaturesSection() {
  const featureData = [
    {
      name: "Quick Search",
      description:
        "Easily search your snippets by content, category, web address, application, and more.",
    },
    {
      name: "iCloud Sync",
      description:
        "Instantly saves and syncs snippets across all your devices.",
    },
    {
      name: "Completely History",
      description:
        "Retrieve any snippets from the first moment you started using the app.",
    },
  ];
  return (
    <>
      <section id="features">
        <div className="section-container min-h-[540px]">
          <div className="flex flex-col gap-12 relative md:flex-row md:justify-between">
            <div className="image-container md:relative md:w-1/2  ">
              <Image
                src="/clipboard/images/image-computer.png"
                alt="Features"
                layout="fill"
                objectFit="contain"
                className="!relative md:!w-[600px] md:!max-w-none md:!absolute md:!left-auto"
              />
            </div>
            <div className="item-container md:w-1/2 flex h-full justify-center items-center">
              <div className="feature-items flex flex-col gap-12 my-12">
                {featureData.map((item, index) => (
                  <div
                    className="feature-item text-xl md:text-left"
                    key={index}
                  >
                    <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                      {item.name}
                    </h5>
                    <p className="max-w-md mx-auto text-grayishBlue">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="access">
        <div className="section-container my-20">
          <h3 className="section-title">Access Clipboard Anywhere</h3>
          <p className="section-content mb-24 text-xl">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>

          <img
            src="clipboard/images/image-devices.png"
            alt=""
            className="mx-auto"
          />
        </div>
      </section>
    </>
  );
}
