import {Theme, useTheme} from '~/utils/theme-provider'

import {Moon} from './icons/moon'
import {Sun} from './icons/sun'

const Header = () => {
  const [theme, setTheme] = useTheme()

  return (
    <header className="header">
      {/* <div className="header__hamburger"></div> */}
      <span className="header__brand typography__mono small">
        Jon Major Condon
      </span>
      <button
        className="header__theme-mode-btn"
        onClick={() =>
          setTheme(prevTheme =>
            prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
          )
        }
      >
        {theme === Theme.DARK ? <Sun /> : <Moon />}
      </button>
    </header>
  )
}
export {Header}
