import React from "react";

export default function TailwindColumns() {
  return (
    <div>
      <h1 className="tailwind-title">Tailwind Grid</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 rounded-sm  text-center">
        <div className="p-10 border md:col-span-2 md:row-span-3 border-blue-500 bg-blue-200">
          Item 1
        </div>
        <div className="p-10 border border-blue-500 bg-blue-200">Item 2</div>
        <div className="p-10 border border-blue-500 bg-blue-200">Item 3</div>
        <div className="p-10 border border-blue-500 bg-blue-200">Item 4</div>
        <div className="p-10 border border-blue-500 bg-blue-200">Item 5</div>
        <div className="p-10 border border-blue-500 bg-blue-200">Item 6</div>
        <div className="p-10 border border-blue-500 bg-blue-200">Item 7</div>
        <div className="p-10 border  border-blue-500 bg-blue-200">Item 8</div>
        <div className="p-10 border md:col-span-2 border-blue-500 bg-blue-200">
          Item 9
        </div>
        <div className="p-10 border  md:col-span-2 border-blue-500 bg-blue-200">
          Item 10
        </div>
        <div className="p-10 border border-blue-500 bg-blue-200">Item 11</div>
        <div className="p-10 border border-blue-500 bg-blue-200">Item 12</div>
        <div className="p-10 border border-blue-500 bg-blue-200">Item 13</div>
        <div className="p-10 border border-blue-500 bg-blue-200">Item 14</div>
        <div className="p-10 border md:col-span-3 border-blue-500 bg-blue-200">
          Item 15
        </div>
        <div className="p-10 border md:col-span-3 border-blue-500 bg-blue-200">
          Item 16
        </div>
      </div>
    </div>
  );
}
