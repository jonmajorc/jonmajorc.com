import * as React from 'react'

enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
}

interface Theme {
  mode: Themes
  noise: boolean
}

const themes: Array<Themes> = Object.values(Themes)

type ThemeContextType = [Theme, React.Dispatch<React.SetStateAction<Theme>>]

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined,
)
ThemeContext.displayName = 'ThemeContext'

function ThemeProvider({
  children,
}: {
  children: (theme: Theme) => React.ReactNode
}) {
  const [theme, setTheme] = React.useState<Theme>(() => {
    return {
      mode: Themes.DARK,
      noise: true,
    }
  })

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children(theme)}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export {ThemeProvider, useTheme, themes, Themes}
