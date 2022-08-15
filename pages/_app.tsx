import "../src/styles/globals.css";
import "../src/styles/keenslider.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";
import { Footer } from "../src/components/Footer";
import { LotteryContextProvider } from "../src/context/LotteryContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LotteryContextProvider>
        <Component {...pageProps} />
      </LotteryContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
