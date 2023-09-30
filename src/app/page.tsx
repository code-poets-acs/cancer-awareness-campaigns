'use client'
import Box from '@mui/material/Box'
import Header from '@/components/Header'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { theme } from '@/styles'
import WhyPrescreening from '@/components/WhyPrescreening'
import Grid from '@mui/material/Grid'
import CostBenefit from '@/components/CostBenefit'
import Swiper from '@/components/Swipe'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Header></Header>
        <Box component='main' sx={{ flexGrow: 1, p: 15 }}>
          <Grid container>
          <Grid item xs={12}>
              <Swiper></Swiper>
            </Grid>
            <Grid item xs={12}>
              <WhyPrescreening></WhyPrescreening>
            </Grid>
            <br></br>
            <Grid
              item
              xs={12}
              style={{
                padding: '15px',
                textAlign: 'center',
                border: '1px solid black'
              }}
            >
              <img
                src='record.png'
                style={{
                  width: '100%'
                }}
              />
            </Grid>
            <Grid item xs={12} pt={3}>
              <CostBenefit></CostBenefit>
            </Grid>
            
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
