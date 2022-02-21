import clsx from 'clsx'
import { Instagram } from './icons/instagram'
import { Twitter } from './icons/twitter'
import { YouTube } from './icons/youtube'
import { Octocat } from './icons/octocat'

interface Props {
  className?: string
}

const SocialsAside = ({ className }: Props) => {
  return (
    <aside className={clsx(['socials-aside', className])}>
      <a href="https://www.instagram.com/jonmajorc/" className="link instagram">
        <Instagram />
      </a>
      <a href="https://twitter.com/jonmajorc" className="link twitter">
        <Twitter />
      </a>
      <a
        href="https://www.youtube.com/channel/UCQB-QsEnKCvJX4e_ms9XvHA?sub_confirmation=1"
        className="link youtube"
      >
        <YouTube />
      </a>
      <a href="https://github.com/jonmajorc" className="link github">
        <Octocat />
      </a>
    </aside>
  )
}

export { SocialsAside }
