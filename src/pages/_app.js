import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
        <title>Front-end dev Exercise</title>
    </Head>
    <Component {...pageProps} />
  </>
}
