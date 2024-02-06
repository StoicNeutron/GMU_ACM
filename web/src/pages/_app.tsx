import "@mantine/core/styles.css";
import "@/styles/globals.css";
import { createTheme, MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
