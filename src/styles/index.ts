import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  // typography: {
  //   h3: {
  //     fontFamily: 'Poppins'
  //   },
  //   allVariants: {
  //     fontFamily: 'Source Sans 3'
  //   }
  // } 
  palette: {
    primary: {
      main: '#ff0000', // Replace with your desired primary color
    },
    secondary: {
      main: '#2196f3', // Replace with your desired secondary color
    },
    // You can override other colors as well, such as error, warning, success, etc.
  },
})
