import "@mantine/core/styles.css";
// import "@/styles/globals.css";
import { createTheme, MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import Head from "next/head";
import { NextPage } from "next/types";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <MantineProvider theme={theme} forceColorScheme="light">
        {/* display the algorithm visualizer */}
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Algorithm Visualizer</title>
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </MantineProvider>
    </>
  );
}
