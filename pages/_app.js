import React from 'react';
import Head from 'next/head';
import GlobalStyle from '../src/theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@100;400;500&display=swap" rel="stylesheet" />
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
