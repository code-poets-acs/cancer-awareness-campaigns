'use client'

// import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Grid, Typography } from '@mui/material'

export default function Header() {
  return (
    <AppBar position='fixed' sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Grid container justifyContent='space-between' alignContent='center'>
          <Grid item xs={3}>
            <Typography variant='h5' component='div' sx={{ flexGrow: 1, padding: 1 }}>
              American Cancer Society
            </Typography>
          </Grid>
          <Grid item xs={0.5}>
            <img style={{ width: 80 }} src='acs-logo.png'></img>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
