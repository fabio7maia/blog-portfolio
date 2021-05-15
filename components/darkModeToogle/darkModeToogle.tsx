import React from 'react'

type ThemeMode = 'light' | 'dark'

const LS_THEME_MODE = '__fabio7maia__.theme'

export const DarkModeToogle: React.FC = () => {
  const [theme, setTheme] = React.useState<ThemeMode>('light')

  const handleOnClick = React.useCallback(() => {
    setTheme((oldTheme) => {
      const newTheme: ThemeMode = oldTheme === 'light' ? 'dark' : 'light'

      return newTheme
    })
  }, [])

  React.useEffect(() => {
    const themeSaved = localStorage.getItem(LS_THEME_MODE)

    if (themeSaved) {
      themeSaved === 'light' && setTheme('light')
      themeSaved === 'dark' && setTheme('dark')
    }
  }, [])

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem(LS_THEME_MODE, theme)
  }, [theme])

  return (
    <button
      className="outline-none border-none focus:outline-none"
      onClick={handleOnClick}
    >
      {theme === 'dark' && (
        <img
          style={{ width: '24px' }}
          src="https://img.icons8.com/office/30/000000/sun--v1.png"
          alt="light mode"
        />
      )}
      {theme === 'light' && (
        <img
          style={{ width: '24px' }}
          src="https://img.icons8.com/material/24/000000/bright-moon.png"
          alt="dark mode"
        />
      )}
    </button>
  )
}
