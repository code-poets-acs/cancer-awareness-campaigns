'use client'

// import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Grid, Typography } from '@mui/material'


export default function Header() {
  const gridStyle = {
    wid: '15px'
  }
  return (
    <AppBar position='fixed' sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {/* <Typography variant='h4' component='div' sx={{ flexGrow: 1, padding: 1 }}>
          American Cancer Society
          <img src='acs-logo.svg'
          ></img>
        </Typography> */}

        <Grid item xs={3}>
          <b> {`American Cancer Society`}</b>
        </Grid>
        <Grid item xs={3} style={gridStyle}>
          <img src=''></img>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
