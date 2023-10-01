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
          <Typography  variant='h4'>{text}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Box component='img' src={image} alt={title} height='100%' width='100%' />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ScreeningTips
