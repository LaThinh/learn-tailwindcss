import React from "react";

export default function TailwindTypography() {
  return (
    <div>
      <h1 className="tailwind-title">Tailwind 04. Typography</h1>
      <section
        className="flex flex-col gap-4 [&>div]:border [&>div]:p-5 
        [&>div>h3]:font-bold [&>div>h3]:text-blue-500"
      >
        {/* Font Family */}
        <div className="flex flex-col gap-2 ">
          <h3>Font Family</h3>
          <p className="font-sans">Tailwind is awesome</p>
          <p className="font-serif">Tailwind is awesome</p>
          <p className="font-mono">Tailwind is awesome</p>
        </div>

        {/* Font Size */}
        <div className="flex flex-col gap-2 ">
          <h3>Font size</h3>
          <p className="text-xs">Tailwind is awesome</p>
          <p className="text-sm">Tailwind is awesome</p>
          <p className="text-base">Tailwind is awesome</p>
          <p className="text-lg">Tailwind is awesome</p>
          <p className="text-xl">Tailwind is awesome</p>
          <p className="text-2xl">Tailwind is awesome</p>
          <p className="text-3xl">Tailwind is awesome</p>
          <p className="text-4xl">Tailwind is awesome</p>
          <p className="text-5xl">Tailwind is awesome</p>
          <p className="text-6xl">Tailwind is awesome</p>
          <p className="text-7xl">Tailwind is awesome</p>
          <p className="text-8xl">Tailwind is awesome</p>
          <p className="text-9xl">Tailwind is awesome</p>
        </div>

        {/* Font Weight */}
        <div className="flex flex-col">
          <h3>Font Weight</h3>
          <p className="font-light">Tailwind is awesome</p>
          <p className="font-normal">Tailwind is awesome</p>
          <p className="font-medium">Tailwind is awesome</p>
          <p className="font-semibold">Tailwind is awesome</p>
          <p className="font-bold">Tailwind is awesome</p>
        </div>

        {/* Letter Spacing */}
        <div className="flex flex-col">
          <h3>Letter Spacing</h3>
          <p className="tracking-tight">Tailwind is awesome</p>
          <p className="tracking-normal">Tailwind is awesome</p>
          <p className="tracking-wide">Tailwind is awesome</p>
        </div>

        {/* Text Alignment */}
        <div className="flex flex-col">
          <h3>Text Alignment</h3>
          <p className="text-left">Tailwind is awesome left</p>
          <p className="text-center">Tailwind is awesome center</p>
          <p className="text-right">Tailwind is awesome right</p>
        </div>

        {/* Text Decoration */}
        <p className="underline decoration-4">Tailwind is awesome</p>
        <p className="line-through">Tailwind is awesome</p>
        <p className="overline">Tailwind is awesome</p>
        <p className="no-underline">Tailwind is awesome</p>

        {/* Decoration Style */}
        <p className="underline decoration-solid">Tailwind is awesome</p>
        <p className="underline decoration-double">Tailwind is awesome</p>
        <p className="underline decoration-dotted">Tailwind is awesome</p>
        <p className="underline decoration-dashed">Tailwind is awesome</p>
        <p className="underline decoration-wavy">Tailwind is awesome</p>

        {/* Decoration Offset */}
        <p className="underline underline-offset-1">Tailwind is awesome</p>
        <p className="underline underline-offset-2">Tailwind is awesome</p>
        <p className="underline underline-offset-4">Tailwind is awesome</p>
        <p className="underline underline-offset-8">Tailwind is awesome</p>

        {/* Text Transform */}
        <p className="normal-case">Tailwind is awesome</p>
        <p className="uppercase">Tailwind is awesome</p>
        <p className="lowercase">Tailwind is awesome</p>
        <p className="capitalize">Tailwind is awesome</p>
      </section>
    </div>
  );
}
