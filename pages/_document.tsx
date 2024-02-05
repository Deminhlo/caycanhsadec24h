import { Html, Head, Main, NextScript } from 'next/document'
import data from 'data/data.json'
import GoogleTagManager from '@magicul/next-google-tag-manager';
export default function Document() {
  return (
    <Html lang="en" style={{ backgroundColor: data.background }} className="scroll-smooth">
      <Head />
      <body>
        <Main />
        <NextScript />
        <GoogleTagManager id="GTM-W2DQW3PJ" />
      </body>
    </Html>
  )
}
