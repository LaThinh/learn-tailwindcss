import Link from "next/link";
import React from "react";

export default function SnippetsSection() {
  return (
    <section id="snippets" className="flex flex-col">
      <div className="section-container">
        <h3 className="section-title">Keep track of your snippets</h3>

        <p className="section-content mb-10">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>

        <div className="flex flex-col md:flex-row gap-10"></div>
      </div>
    </section>
  );
}
