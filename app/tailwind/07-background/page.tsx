import React from "react";

export default function TailwindBackground() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="tailwind-title">Tailwind Background Shadows</h1>
      <div
        className="h-64 w-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url(../assets/img/img1.jpg)" }}
      ></div>

      <div className="h-48 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <div className="h-48 w-full rounded-xl bg-gradient-to-tr from-orange-100 to-yellow-500"></div>
      <div className="h-48 w-full rounded-xl bg-gradient-radial from-slate-200 to-green-400"></div>

      <h3>Shadows</h3>
      <div className="my-5 p-4 bg-white shadow-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
        nostrum, corporis debitis eveniet itaque iste vero, quam laboriosam
        nesciunt voluptates ipsum, rerum quo ad quis at tempore! Error, debitis
        voluptatum.
      </div>

      <div className="my-5 p-4 bg-white shadow-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
        nostrum, corporis debitis eveniet itaque iste vero, quam laboriosam
        nesciunt voluptates ipsum, rerum quo ad quis at tempore! Error, debitis
        voluptatum.
      </div>

      <div className="my-5 p-4 bg-white shadow-xl shadow-blue-500/50">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
        nostrum, corporis debitis eveniet itaque iste vero, quam laboriosam
        nesciunt voluptates ipsum, rerum quo ad quis at tempore! Error, debitis
        voluptatum.
      </div>

      <div className="my-5 p-4 bg-white shadow-2xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
        nostrum, corporis debitis eveniet itaque iste vero, quam laboriosam
        nesciunt voluptates ipsum, rerum quo ad quis at tempore! Error, debitis
        voluptatum.
      </div>

      <div className="my-2 relative flex justify-center -space-x-36">
        <div className="mix-blend-multiply h-40 p-5 rounded-xl bg-blue-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat iste
          cumque maxime libero delectus, tempora quae fuga voluptatem debitis
          architecto in perferendis odio dignissimos eligendi animi labore quos
          sit totam.
        </div>
        <div className="mix-blend-multiply h-40 p-5 rounded-xl mt-20 bg-pink-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          assumenda possimus maiores pariatur numquam sint laboriosam quos
          officia nesciunt fuga quo, vero ab enim repellat! Inventore at vitae
          earum libero!
        </div>
      </div>
    </div>
  );
}
