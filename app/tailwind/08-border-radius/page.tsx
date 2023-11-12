import React from "react";

export default function TailwindBorder() {
  return (
    <div>
      <h1 className="tailwind-title">Tailwind Border Radius</h1>
      <div className="flex gap-2 flex-wrap">
        <div className="w-96 m-3  p-5 border-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
          commodi voluptates necessitatibus soluta et veritatis provident quae
          eaque ab natus ratione porro amet perferendis distinctio officiis
          corporis molestias, facilis consectetur.
        </div>

        <div className="w-96 m-3 p-5 border-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
          commodi voluptates necessitatibus soluta et veritatis provident quae
          eaque ab natus ratione porro amet perferendis distinctio officiis
          corporis molestias, facilis consectetur.
        </div>

        <div className="w-96 m-3 p-5 border-4 border-red-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
          commodi voluptates necessitatibus soluta et veritatis provident quae
          eaque ab natus ratione porro amet perferendis distinctio officiis
          corporis molestias, facilis consectetur.
        </div>

        <div className="w-96 m-3 p-5 border-x-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
          commodi voluptates necessitatibus soluta et veritatis provident quae
          eaque ab natus ratione porro amet perferendis distinctio officiis
          corporis molestias, facilis consectetur.
        </div>

        <div className="w-96 m-3 p-5 border-y-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
          commodi voluptates necessitatibus soluta et veritatis provident quae
          eaque ab natus ratione porro amet perferendis distinctio officiis
          corporis molestias, facilis consectetur.
        </div>

        <div className="w-96 m-3 p-5 border-blue-500 rounded-2xl border-t border-r-2 border-b-4 border-l-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
          commodi voluptates necessitatibus soluta et veritatis provident quae
          eaque ab natus ratione porro amet perferendis distinctio officiis
          corporis molestias, facilis consectetur.
        </div>

        <h3>Rounded</h3>
        <div className="rounded-xl m-3 p-5 border border-yellow-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
          dolore provident. Quo voluptates at laudantium dolor. Soluta
          voluptatibus quisquam repellat amet maiores impedit, officiis corrupti
          reiciendis praesentium, quis veniam totam.
        </div>

        <div className="m-3 p-5 border border-sky-500 rounded-full">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
          dolore provident. Quo voluptates at laudantium dolor. Soluta
          voluptatibus quisquam repellat amet maiores impedit, officiis corrupti
          reiciendis praesentium, quis veniam totam.
        </div>

        <div className="m-3 p-5 border border-yellow-500 rounded-3xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
          dolore provident. Quo voluptates at laudantium dolor. Soluta
          voluptatibus quisquam repellat amet maiores impedit, officiis corrupti
          reiciendis praesentium, quis veniam totam.
        </div>

        <h3>Outline</h3>
        <button className="outline outline-4 outline-offset-2 outline-red-500">
          Click here
        </button>
      </div>
    </div>
  );
}
