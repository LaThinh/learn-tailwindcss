import Header from "@/components/layout/Header";
import * as React from "react";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <>
      <Header />
      <h1 className="text-3xl ">This is home page 333</h1>
    </>
  );
}
