import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from '@next/font/google'
import Head from 'next/head'
import data from 'data/data.json'
const nunitoVariable = Nunito()

export default function App({ Component, pageProps }: AppProps) {
  const { name, bio, background } = data
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={bio} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={background} />
        <link rel="icon" href="/favicon.png" />
        <script defer src="https://analytics.us.umami.is/script.js" data-website-id="635cbaa8-707e-4888-92ac-89c662c93bef"></script>
      </Head>
      <main className={`${nunitoVariable.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
