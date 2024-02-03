import { UserInfo, Section } from 'components'
import Profile from './../layouts/profile'
import data from 'data/data.json'
import QNA from 'components/qna'
import { GoogleTagManager } from '@next/third-parties/google'
 
export default function Page() {
  return <GoogleTagManager gtmId="GTM-W2DQW3PJ" />
}
export default function Home() {
  const { contacts, socials, designs, gaming_profiles, wallets, qna } = data
  return (
    <Profile>
      <UserInfo />
      {contacts.display && <Section name="Liên hệ" items={contacts.items} />}
      {socials.display && <Section name="Mạng xã hội" items={socials.items} />}
      {designs.display && <Section name="Designs" items={designs.items} />}
      {gaming_profiles.display && <Section name="Gaming" items={gaming_profiles.items} />}
      {wallets.display && <Section name="Wallets" items={wallets.items} />}
      {qna.display && <QNA {...qna} />}
    </Profile>
  )
}
