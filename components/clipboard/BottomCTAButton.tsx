import Link from "next/link";
import React from "react";

export default function BottomCTAButton() {
  return (
    <section id="bottom-cta">
      <div className="section-container">
        <h1 className="section-title">Clipboard for iOS and MacOS</h1>

        <p className="section-content">
          {`Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard.`}
        </p>

        <div className="button-container my-8">
          <Link
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
          >
            Download for iOS
          </Link>
          <Link
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
          >
            Download for Mac
          </Link>
        </div>
      </div>
    </section>
  );
}
