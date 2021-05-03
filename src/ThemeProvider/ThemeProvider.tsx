import React, { useState } from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import { getThemeByName } from '../Themes/themeNames'

export const ThemeContext = React.createContext((themeName: string): void => {})

const ThemeProvider: React.FC = (props) => {
  // the State(useState) is use to hold the selected theme name
  const [themeName, _setThemeName] = useState('lightTheme')
  // Retrieve the theme object by theme name

  const theme = getThemeByName(themeName)

  return (
    <ThemeContext.Provider value={_setThemeName}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
