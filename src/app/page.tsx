'use client'
import Box from '@mui/material/Box'
import Header from '@/components/Header'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { theme } from '@/styles'
import CompanyForm from '@/components/CompanyForm'
import Grid from '@mui/material/Grid'
import Entry from '@/components/Entry'
import Recommendation from '@/components/Recommendation'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Header></Header>
        <Box component='main' sx={{ flexGrow: 1, p: 15 }}>
          <Grid container>
            <Grid item xs={12}>
              <Recommendation></Recommendation>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
