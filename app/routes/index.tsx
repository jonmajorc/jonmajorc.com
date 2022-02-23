import {JMCLogo} from '~/components/icons/jmc-logo'
import {SocialsAside} from '~/components/socials-aside'

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
          <p>
            Praise{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://bibleproject.com/explore/video/jesus-the-royal-priest/"
              className="highlight"
            >
              Jesus
            </a>{' '}
            🙌
          </p>
        </div>
      </section>
      <section>
        <p className="typography__mono">
          Heyoooo! Welcome! My name is Jon Major Condon. I'm a Creative based in
          Wisconsin. I am a full-time Software Engineer, and I make stories
          through the art of photography and cinematography! I absolutley love
          bringing people joy through cinematic pieces of art, be that through
          Film or Photography!
        </p>
        <p>
          I've also been a Software Engineer for almost a decade! Within this
          time, I've been creatively solving technical problems, and have worn
          many hats within all shapes/sizes of companies helping them succeed
          alongside my peers.
        </p>
      </section>
      <section className="spacing">
        <blockquote>
          If you make things and share them, your heart will at some point be
          broken. If you never share, it will harden. Your choice. ~ Todd henry
        </blockquote>
      </section>
    </main>
  )
}
