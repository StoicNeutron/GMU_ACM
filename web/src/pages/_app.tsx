import '@mantine/core/styles.css';
import '@/styles/globals.css';
import { createTheme, MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider theme={theme}>
        {/* display the algorithm visualizer */}
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Algorithm Visualizer</title>
        </Head>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
