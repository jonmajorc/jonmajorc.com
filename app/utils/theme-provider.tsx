import * as React from 'react'

enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}
const themes: Array<Theme> = Object.values(Theme)

type ThemeContextType = [Theme, React.Dispatch<React.SetStateAction<Theme>>]

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
)
ThemeContext.displayName = 'ThemeContext'

function ThemeProvider({
  children,
}: {
  children: (theme: string) => React.ReactNode
}) {
  const [theme, setTheme] = React.useState<Theme>(() => {
    return Theme.DARK
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

export { ThemeProvider, useTheme, themes, Theme }
