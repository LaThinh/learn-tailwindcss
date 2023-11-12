import React from "react";

export default function TailwindColumns() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="tailwind-title">Tailwind Columns</h1>
      <div className="columns-4 gap-4">
        <img src="/assets/img/img1.jpg" alt="img 01" />
        <img src="/assets/img/img2.jpg" alt="img 01" />
        <img src="/assets/img/img3.jpg" alt="img 01" />
        <img src="/assets/img/img4.jpg" alt="img 01" />
        <img src="/assets/img/img5.jpg" alt="img 01" />
        <img src="/assets/img/img6.jpg" alt="img 01" />
        <img src="/assets/img/img7.jpg" alt="img 01" />
      </div>

      <div className="columns-xs">
        <img src="/assets/img/img1.jpg" alt="img 01" />
        <img src="/assets/img/img2.jpg" alt="img 01" />
        <img src="/assets/img/img3.jpg" alt="img 01" />
        <img src="/assets/img/img4.jpg" alt="img 01" />
        <img src="/assets/img/img5.jpg" alt="img 01" />
        <img src="/assets/img/img6.jpg" alt="img 01" />
      </div>

      <div className="columns-4">
        <img
          className="aspect-square"
          src="/assets/img/img1.jpg"
          alt="img 01"
        />
        <img
          className="aspect-square"
          src="/assets/img/img2.jpg"
          alt="img 01"
        />
        <img
          className="aspect-square"
          src="/assets/img/img3.jpg"
          alt="img 01"
        />
        <img
          className="aspect-square"
          src="/assets/img/img4.jpg"
          alt="img 01"
        />
        <img
          className="aspect-square"
          src="/assets/img/img5.jpg"
          alt="img 01"
        />
        <img
          className="aspect-square"
          src="/assets/img/img6.jpg"
          alt="img 01"
        />
        <img
          className="aspect-square"
          src="/assets/img/img7.jpg"
          alt="img 01"
        />
      </div>
    </div>
  );
}
