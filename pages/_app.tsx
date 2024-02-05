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
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W2DQW3PJ');</script>
        <!-- End Google Tag Manager -->
      </Head>
      <main className={`${nunitoVariable.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
