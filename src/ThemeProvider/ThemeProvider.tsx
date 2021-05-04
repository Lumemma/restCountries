import React, { useState } from 'react'
import { getThemeByName } from '../Themes/themeNames'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'

export const ThemeContext = React.createContext((themeName: string): void => {})

const ThemeProvider: React.FC = (props) => {
  // the State(useState) is use to hold the selected theme name
  const [themeName, _setThemeName] = useState('lightTheme')
  // Retrieve the theme object by theme name

  const theme = getThemeByName(themeName)

  return (
    <ThemeContext.Provider value={_setThemeName}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
