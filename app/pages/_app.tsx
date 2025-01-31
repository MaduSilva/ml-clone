import "@/styles/global.css";
import "@/styles/font.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
