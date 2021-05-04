import { Theme } from '@material-ui/core'
import { lightTheme } from './light'
import { darkTheme } from './dark'
import { brownTheme } from './brown'

export function getThemeByName(theme: string): Theme {
  //console.log(theme)
  return themeMap[theme]
}
const themeMap: { [key: string]: Theme } = {
  lightTheme,
  darkTheme,
  brownTheme,
}
