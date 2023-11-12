import LayoutCss from "@/components/layout/LayoutCss";
import Image from "next/image";
import * as React from "react";

export interface ITailWindCSSProps {}

export default function TailWind01(props: ITailWindCSSProps) {
  return (
    <LayoutCss title="TailWind Alert Box">
      <div>
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
    </LayoutCss>
  );
}
