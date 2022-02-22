import {JMCLogo} from './icons/jmc-logo'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <JMCLogo className="footer__jmc-logo" />
        <h3 className="footer__email">jon@jonmajorc.com</h3>
      </div>

      {/* background  */}
      <div className="footer__bg">
        <div className="footer__img">
          <img src="/me-wfh.png" alt="working at computer" />
        </div>
        <div className="footer__img">
          <img src="/me-taking-photos.png" alt="taking photos" />
        </div>
      </div>
    </footer>
  )
}

export {Footer}
