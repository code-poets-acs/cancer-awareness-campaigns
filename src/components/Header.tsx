'use client'

import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

export default function Header() {
  return (
    <AppBar position='fixed' sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant='h4' component='div' sx={{ flexGrow: 1, padding: 1 }}>
          ACS
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
