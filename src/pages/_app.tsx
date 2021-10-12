import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Teste - Boilerplate</title>
        <link rel="shortcut icon" href="img/favicon.ico" />
        <link rel="apple-touch-icon icon" href="img/favicon.ico" />
        <meta name="description" content="A simple project" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
