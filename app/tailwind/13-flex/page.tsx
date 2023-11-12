import React from "react";

export default function TailwindColumns() {
  return (
    <div>
      <h1 className="tailwind-title">Tailwind Flex Box</h1>
      <div
        className="flex flex-col md:flex-row flex-wrap  h-72 w-full bg-gray-100
        items-center justify-center text-center
      [&>div]:p-10 [&>div]:border [&>div]:bg-blue-200 [&>div]:w-32"
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
      </div>

      <div
        className="flex flex-col gap-4 md:flex-row flex-wrap  h-72 w-full bg-gray-100
        items-center justify-center text-center
      [&>div]:p-10 [&>div]:border [&>div]:bg-green-200 [&>div]:w-32"
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
      </div>

      <div
        className="flex w-full bg-gray-200
      [&>div]:p-10 [&>div]:border [&>div]:bg-orange-200 "
      >
        <div>1</div>
        <div className="flex-none">2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
}
