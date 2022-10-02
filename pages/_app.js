import 'cross-fetch'
import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'
import '../styles/globals.css'

const progress = new ProgressBar({
  size: 2,
  color: "#EF4023",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
