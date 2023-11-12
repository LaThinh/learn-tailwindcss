// import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context";
import type { AppProps } from "next/app";
import Layout from "@/app/layout";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
