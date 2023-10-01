import React from 'react'
import { Box, Grid, Typography, Paper } from '@mui/material'

interface screeningObject {
  title: string
  text: string
  image: string
}

const ScreeningTips: React.FC<screeningObject> = ({ title, text, image }) => {
  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant='h3' gutterBottom>
            <b>{title}</b>
          </Typography>
<<<<<<< HEAD
          <Typography  variant='h4'>{text}</Typography>
=======
          <Typography variant='body1'>{text}</Typography>
>>>>>>> 987c5cc1547a0178eb5b055a6b9c1f5d8d451cd7
        </Grid>
        <Grid item xs={6}>
          <Box component='img' src={image} alt={title} height='100%' width='100%' />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ScreeningTips
