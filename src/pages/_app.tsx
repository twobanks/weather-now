/* eslint-disable @next/next/no-page-custom-font */
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>
        WEATHERNOW
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="WEATHER NOW" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default MyApp;