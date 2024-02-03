import Footer from 'components/footer'
import { GoogleTagManager } from '@next/third-parties/google'
export default function Profile({ children }) {
  return (
    <>
      <div className="mx-auto max-w-md space-y-6 px-5 py-16 md:px-0">{children}</div>
      <GoogleTagManager gtmId="GTM-W2DQW3PJ" />
      <Footer />
    </>
  )
}
