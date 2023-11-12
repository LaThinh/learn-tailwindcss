import Image from "next/image";
import React from "react";

export default function TailwindFilterPage() {
  return (
    <div>
      <h1 className="tailwind-title">Tailwind Filter</h1>
      <div className="flex gap-3 flex-wrap">
        <h3 className="text-2xl font-bold">Blur</h3>
        <div className="blur-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          natus reiciendis non dicta molestias nulla dolor illo vel aperiam,
          earum dolorum, cum architecto quae nesciunt eum ab laboriosam
          exercitationem voluptatibus.
        </div>

        <div className="blur">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          natus reiciendis non dicta molestias nulla dolor illo vel aperiam,
          earum dolorum, cum architecto quae nesciunt eum ab laboriosam
          exercitationem voluptatibus.
        </div>

        <h3 className="text-2xl font-bold w-full">Contrast</h3>
        <Image
          src="/assets/img/img3.jpg"
          alt="Image 3"
          width={400}
          height={300}
          className="contrast-50"
        />
        <Image
          src="/assets/img/img3.jpg"
          alt="Image 3"
          width={400}
          height={300}
          className="contrast-75"
        />
        <Image
          src="/assets/img/img3.jpg"
          alt="Image 3"
          width={400}
          height={300}
          className="contrast-100"
        />
        <Image
          src="/assets/img/img3.jpg"
          alt="Image 3"
          width={400}
          height={300}
          className="contrast-200"
        />

        <h3 className="text-2xl font-bold w-full">Grayscale</h3>
        <Image
          src="/assets/img/img4.jpg"
          alt="Image 3"
          width={400}
          height={300}
          className="grayscale-0"
        />
        <Image
          src="/assets/img/img4.jpg"
          alt="Image 3"
          width={400}
          height={300}
          className="grayscale"
        />

        <h3 className="text-2xl font-bold w-full">Invert</h3>
        <Image
          src="/assets/img/img5.jpg"
          alt="Image 3"
          width={400}
          height={300}
          className="invert-0"
        />
        <Image
          src="/assets/img/img5.jpg"
          alt="Image 3"
          width={400}
          height={300}
          className="invert"
        />

        <h3 className="text-2xl font-bold w-full">Sepia</h3>
        <Image
          src="/assets/img/img6.jpg"
          alt="Image 3"
          width={400}
          height={300}
          className="sepia-0"
        />
        <Image
          src="/assets/img/img6.jpg"
          alt="Image 3"
          width={400}
          height={300}
          className="sepia"
        />

        <h3 className="text-2xl font-bold w-full">Hue Rotate</h3>
        <Image
          src="/assets/img/img6.jpg"
          alt="Image 3"
          width={400}
          height={300}
          className="-hue-rotate-0"
        />
        <Image
          src="/assets/img/img6.jpg"
          alt="Image 3"
          width={400}
          height={300}
          className="hue-rotate-15"
        />
        <Image
          src="/assets/img/img6.jpg"
          alt="Image 3"
          width={400}
          height={300}
          className="hue-rotate-30"
        />
        <Image
          src="/assets/img/img6.jpg"
          alt="Image 3"
          width={400}
          height={300}
          className="hue-rotate-60"
        />
        <Image
          src="/assets/img/img6.jpg"
          alt="Image 3"
          width={400}
          height={300}
          className="hue-rotate-90"
        />
        <Image
          src="/assets/img/img6.jpg"
          alt="Image 3"
          width={400}
          height={300}
          className="hue-rotate-180"
        />

        <h3 className="text-2xl font-bold w-full">Brightness</h3>
        <Image
          src="/assets/img/img1.jpg"
          alt="Image 1"
          width={400}
          height={300}
          className="brightness-20"
        />

        <Image
          src="/assets/img/img1.jpg"
          alt="Image 1"
          width={400}
          height={300}
          className="brightness-50"
        />

        <Image
          src="/assets/img/img1.jpg"
          alt="Image 1"
          width={400}
          height={300}
          className="brightness-75"
        />
        <Image
          src="/assets/img/img1.jpg"
          alt="Image 1"
          width={400}
          height={300}
          className="brightness-90"
        />

        <Image
          src="/assets/img/img1.jpg"
          alt="Image 1"
          width={400}
          height={300}
          className="brightness-110"
        />

        <Image
          src="/assets/img/img1.jpg"
          alt="Image 1"
          width={400}
          height={300}
          className="brightness-200"
        />
      </div>
    </div>
  );
}
