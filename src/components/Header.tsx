'use client'

// import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Grid, Typography } from '@mui/material'

const headerStyle = { backgroundColor: 'white' };

export default function Header() {
  return (
    <AppBar position='fixed' sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
      <Toolbar style={headerStyle}>
        <Grid container justifyContent='space-between' alignContent='center'>
          <Grid item xs={3}>
            <Typography variant='h4' component='div' sx={{ flexGrow: 1, padding: 1, color: '#CC0033' }}>
              American Cancer Society
            </Typography>
          </Grid>
          <Grid item xs={0.5}>
            <img style={{ width: 90 }} src='acs-logo.png'></img>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
