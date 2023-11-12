import React from "react";

export default function TailwindPosition() {
  return (
    <div>
      <h1 className="tailwind-title">Tailwind Position</h1>
      <section className="flex flex-col gap-5">
        <div className="relative w-1/2 h-12 bg-red-200">
          <p>Parent Element</p>
          <div className="absolute bottom-0 right-0 bg-red-500">
            <p>Absolute Child</p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="relative h-32 w-32 bg-yellow-100">
            <div className="absolute left-0 top-0 h-16 w-16 bg-yellow-300"></div>
          </div>
          <div className="relative h-32 w-32 bg-yellow-100">
            <div className="absolute right-0 top-0 h-16 w-16 bg-yellow-300"></div>
          </div>
          <div className="relative h-32 w-32 bg-yellow-100">
            <div className="absolute right-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
          </div>
          <div className="relative h-32 w-32 bg-yellow-100">
            <div className="absolute left-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="relative h-32 w-32 bg-yellow-100">
            <div className="absolute inset-x-0 top-0 h-16 bg-yellow-300">
              inset-x-0
            </div>
          </div>
          <div className="relative h-32 w-32 bg-yellow-100">
            <div className="absolute inset-y-0 left-0 w-16 bg-yellow-300">
              inset-y-0
            </div>
          </div>
          <div className="relative h-32 w-32 bg-yellow-100">
            <div className="absolute inset-x-4 bottom-0 h-16 bg-yellow-300">
              inset-x-4 bottom-0
            </div>
          </div>
          <div className="relative h-32 w-32 bg-yellow-100">
            <div className="absolute inset-x-5 inset-y-10 bg-yellow-300">
              inset-x-5 inset-y-10
            </div>
          </div>
        </div>

        <div className="[&>span]:text-blue-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          <span className="inline ">This is in line </span>
          eum molestiae non inventore ab eius tenetur,
          <span className="inline-block font-bold">This is inline block </span>
          animi adipisci aspernatur labore!{" "}
          <span className="block font-bold">This is block</span>Sapiente
          mollitia illum ipsa placeat, repudiandae harum et. A, qui.
        </div>

        <div className="">
          <h3>Z-index</h3>
          <div className="relative border h-40">
            <div className="absolute left-10 w-24 h-24 bg-blue-300">300</div>
            <div className="absolute left-20 w-24 h-24 bg-blue-400 z-10">
              400
            </div>
            <div className="absolute left-40 w-24 h-24 bg-blue-500">500</div>
            <div className="absolute left-60 w-24 h-24 bg-blue-600 z-40">
              600
            </div>
            <div className="absolute left-80 w-24 h-24 bg-blue-700">700</div>
          </div>
        </div>

        <div>
          <div className="w-1/2">
            <img
              className="h-48 w-48 float-left m-5"
              src="/assets/img/img1.jpg"
              alt="img 01"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              accusamus nobis ipsam deserunt ut, perferendis ipsum aperiam quae
              voluptatem hic harum mollitia qui? Libero non, ab impedit quae qui
              voluptatibus?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
