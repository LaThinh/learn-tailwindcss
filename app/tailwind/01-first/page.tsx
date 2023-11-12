import Image from "next/image";
import React from "react";

export default function TailWindFirstPage() {
  return (
    <div>
      <h1 className="tailwind-title">Tailwind Alert Box</h1>
      <div className="alert flex items-center bg-white p-6 rounded-xl mt-12 space-x-4 max-w-[500px] m-auto shadow-xl">
        <div className="alert-logo-wrap">
          <Image
            className="alert-logo"
            width={48}
            height={48}
            src="/assets/img/warning.svg"
            alt="alert"
          />
        </div>
        <div className="alert-body">
          <h4 className="alert-title text-xl font-medium text-black">
            Are You Sure?
          </h4>
          <p className="alert-message text-slate-500">
            You are about to delete a post
          </p>
        </div>
      </div>
    </div>
  );
}
