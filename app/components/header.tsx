import {Themes, useTheme} from '~/utils/theme-provider'

import {Eye} from './icons/eye'
import {Moon} from './icons/moon'
import {Sun} from './icons/sun'

const Header = () => {
  const [theme, setTheme] = useTheme()

  return (
    <header className="header">
      {/* <div className="header__hamburger" /> */}
      <div className="header__brand">
        <a className=" typography__mono small" href="/">
          Jon Major Condon
        </a>
      </div>
      <div className="header__right">
        <button
          className="header__theme-btn"
          onClick={() =>
            setTheme(prevTheme => ({
              ...prevTheme,
              mode:
                prevTheme.mode === Themes.LIGHT ? Themes.DARK : Themes.LIGHT,
            }))
          }
        >
          {theme.mode === Themes.DARK ? <Sun /> : <Moon />}
        </button>
        <button
          className="header__noise-btn"
          onClick={() =>
            setTheme(prevTheme => ({
              ...prevTheme,
              noise: !prevTheme.noise,
            }))
          }
        >
          {theme.noise ? <Eye /> : <Eye off />}
        </button>
      </div>
    </header>
  )
}
export {Header}
