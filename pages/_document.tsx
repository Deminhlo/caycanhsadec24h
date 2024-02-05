import { Html, Head, Main, NextScript } from 'next/document'
import data from 'data/data.json'

export default function Document() {
  return (
    <Html lang="en" style={{ backgroundColor: data.background }} className="scroll-smooth">
      <Head />
      <body>
        <Main />
        <NextScript />
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W2DQW3PJ"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
      </body>
    </Html>
  )
}
