import { createMuiTheme } from '@material-ui/core'

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffffff',
    },
    background: {
      default: '#000',
    },
  },
})
