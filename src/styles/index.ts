import { createTheme } from '@mui/material/styles'

const secondary = 'rgb(45, 41, 215)'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    secondary: {
      main: secondary
    }
  }
})