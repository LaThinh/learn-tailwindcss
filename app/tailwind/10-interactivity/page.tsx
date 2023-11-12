import React from "react";

export default function TailwindInteractivity() {
  return (
    <div>
      <h1 className="tailwind-title">Tailwind Interactivity</h1>
      <div className="flex-flex-col gap-3">
        <div className="flex-box justify-start">
          <h3>Hover, Focus, Active</h3>
          <div className="flex gap-4">
            <button
              className="bg-black w-auto text-white py-3 px-5 rounded
            hover:bg-orange-400 hover:text-black"
            >
              Submit
            </button>

            <button
              className="bg-black w-auto text-white py-3 px-5 rounded
            focus:bg-green-400 focus:text-black"
            >
              Focus
            </button>

            <button
              className="bg-black w-auto text-white py-3 px-5 rounded
            active:bg-blue-400 active:text-black"
            >
              Active
            </button>
          </div>
        </div>

        <div className="flex-box">
          <h3>Parent Group</h3>
          <div className="group block p-5 bg-white border-gray-300 hover:bg-sky-600">
            <h3 className="title group-hover:text-white">Title</h3>
            <p className="content group-hover:text-white">
              this is card content
            </p>
          </div>
        </div>

        <div className="flex-box">
          <h3>Select</h3>
          <div>
            <select name="" id="" className="appearance-none">
              <option value={"yes"}>Yes</option>
              <option value={"no"}>No</option>
            </select>
          </div>
        </div>

        <div className="flex-box">
          <h3>User Select</h3>
          <ul>
            <li className="select-none">
              Select None. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.{" "}
            </li>
            <li className="select-text">
              Select text. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.{" "}
            </li>
            <li className="select-all">
              Select All. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.{" "}
            </li>
            <li className="select-auto">
              Select Auto. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.{" "}
            </li>
          </ul>
        </div>

        <div className="flex-box">
          <h3>Scroll</h3>
          <div className="h-64 scroll-m-2 scroll-smooth overflow-auto">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit explicabo, commodi odit asperiores ea ex quae, optio
              quod fugiat maiores aliquam repudiandae voluptatem doloremque
              mollitia animi modi nam neque impedit. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Reprehenderit explicabo, commodi
              odit asperiores ea ex quae, optio quod fugiat maiores aliquam
              repudiandae voluptatem doloremque mollitia animi modi nam neque
              impedit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit explicabo, commodi odit asperiores ea ex quae, optio
              quod fugiat maiores aliquam repudiandae voluptatem doloremque
              mollitia animi modi nam neque impedit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit explicabo, commodi odit asperiores ea ex quae, optio
              quod fugiat maiores aliquam repudiandae voluptatem doloremque
              mollitia animi modi nam neque impedit. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Reprehenderit explicabo, commodi
              odit asperiores ea ex quae, optio quod fugiat maiores aliquam
              repudiandae voluptatem doloremque mollitia animi modi nam neque
              impedit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit explicabo, commodi odit asperiores ea ex quae, optio
              quod fugiat maiores aliquam repudiandae voluptatem doloremque
              mollitia animi modi nam neque impedit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit explicabo, commodi odit asperiores ea ex quae, optio
              quod fugiat maiores aliquam repudiandae voluptatem doloremque
              mollitia animi modi nam neque impedit. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Reprehenderit explicabo, commodi
              odit asperiores ea ex quae, optio quod fugiat maiores aliquam
              repudiandae voluptatem doloremque mollitia animi modi nam neque
              impedit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit explicabo, commodi odit asperiores ea ex quae, optio
              quod fugiat maiores aliquam repudiandae voluptatem doloremque
              mollitia animi modi nam neque impedit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
