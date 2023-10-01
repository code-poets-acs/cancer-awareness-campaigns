/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { Tabs, Tab, Box, Typography, List, ListItem, Theme, Grid } from '@mui/material'
import EmailAdvertisementCard from './Email'
import { ContentGenerated } from '../types'

function ChannelTabs(params: ContentGenerated) {
  const [selectedTab, setSelectedTab] = useState(0)

  const handleChange = (_event: any, newValue: React.SetStateAction<number>) => {
    setSelectedTab(newValue)
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={selectedTab} onChange={handleChange} variant='fullWidth'>
          <Tab label='Email' />
          <Tab label='SMS' disabled />
          <Tab label='Intranet' disabled />
        </Tabs>
      </Box>
      {selectedTab === 0 && (
        <Grid container spacing={3}>
          {params.emails.map((email, index) => (
            <Grid item xs={6} key={index}>
              <EmailAdvertisementCard {...email} />
            </Grid>
          ))}
        </Grid>
      )}
      {selectedTab === 1 && (
        <List>
          <ListItem>"[Newsletter] The importance of cancer pre-screening and how it can save your life."</ListItem>
          <ListItem>"Discover the benefits of early cancer detection. Get pre-screened today!"</ListItem>
          <ListItem>"Your health matters to us. Join our webinar on the benefits of cancer pre-screening."</ListItem>
        </List>
      )}
      {selectedTab === 2 && (
        <List>
          <ListItem>
            "🎗️ Join the movement for early detection. Schedule your cancer pre-screening. #EarlyDetectionSavesLives"
          </ListItem>
          <ListItem>
            "Share to raise awareness! Cancer pre-screening can be a lifesaver. 💪 #StayAheadOfCancer"
          </ListItem>
          <ListItem>
            "We care about our community. Let's talk about the importance of early cancer detection. 🌟"
          </ListItem>
        </List>
      )}
    </Box>
  )
}

export default ChannelTabs
