import { Provider } from "@/context/Provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import {HeroUIProvider} from "@heroui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <HeroUIProvider>
      <Provider>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </HeroUIProvider>
  </>
  );
}
