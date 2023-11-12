import LayoutCss from "@/components/layout/LayoutCss";
import Image from "next/image";
import * as React from "react";

export interface ITailWindCSSProps {}

export default function TailWind03(props: ITailWindCSSProps) {
  return (
    <LayoutCss title="Container Spacing">
      <div className="container mx-auto">
        <article>
          <h3>Article One</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam libero molestiae recusandae accusantium voluptates? Expedita
            dignissimos amet eveniet dolore nobis odio a sunt, maiores quasi. Modi amet quos dolores!
          </p>
        </article>

        <div className="bg-stone-300 my-2">Helo Word</div>

        {/* Space Between X */}
        <div className="flex space-x-4">
          <div className="item">item1</div>
          <div className="item">item2</div>
          <div className="item">item3</div>
          <div className="item">item4</div>
          <div className="item">item5</div>
          <div className="item">item6</div>
          <div className="item">item7</div>
          <div className="item">item8</div>
          <div className="item">item9</div>
          <div className="item">item10</div>
        </div>

        {/* Space Between Y */}
        <div className="flex flex-col space-y-4 child:cursor-pointer child-hover:text-blue-700">
          <div className="item">item1</div>
          <div className="item">item2</div>
          <div className="item">item3</div>
          <div className="item">item4</div>
          <div className="item">item5</div>
          <div className="item">item6</div>
          <div className="item">item7</div>
          <div className="item">item8</div>
          <div className="item">item9</div>
          <div className="item">item10</div>
        </div>
      </div>
    </LayoutCss>
  );
}
