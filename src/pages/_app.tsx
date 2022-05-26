/* eslint-disable @next/next/no-page-custom-font */
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>WEATHERNOW - Conta Azul</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="<ContaAzul>Desafio FrontEnd</ContaAzul>" />
      <meta property="og:locale" content="pt_BR"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="WEATHERNOW - Conta Azul"/>
      <meta property="og:description" content="<ContaAzul>Desafio FrontEnd</ContaAzul>"/>
      <meta property="og:url" content="https://weathernow-contaazul.vercel.app/"/>
      <meta property="og:site_name" content="WEATHERNOW - Conta Azul"/>
      <meta property="og:image" content="https://contaazul.com/wp-content/uploads/2018/04/contaazul-logo-ca.png"/>
      <meta property="og:image:width" content="3333"/>
      <meta property="og:image:height" content="3333"/>
      <meta property="og:image:type" content="image/png"/>
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default MyApp;