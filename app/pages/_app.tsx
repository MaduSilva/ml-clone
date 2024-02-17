import { GlobalContextProvider } from "@/contexts/globalContext";
import "@/styles/global.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />;
    </GlobalContextProvider>
  );
}
