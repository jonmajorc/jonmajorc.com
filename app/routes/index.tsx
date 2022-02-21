import { JMCLogo } from '~/components/icons/jmc-logo'
import { SocialsAside } from '~/components/socials-aside'

export default function Index() {
  return (
    <main className="home">
      <section className="home__banner">
        <div className="home__top-content">
          <SocialsAside className="home__socials-aside" />
          <JMCLogo className="home__jmc-logo" />
        </div>
        <div className="home__intro">
          <span>42.6828° N, 89.0187° W</span>
          <span>Wisconsin</span>
          <p>Praise Jesus 🙌</p>
        </div>
      </section>
    </main>
  )
}
