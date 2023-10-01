/* eslint-disable react/no-unescaped-entities */
import { Typography, Box, Paper, TextField, Grid } from '@mui/material'

import LoadingButton from '@mui/lab/LoadingButton'
import ChannelTabs from './channels'
import { useState } from 'react'
import { chat } from '@/services/openai'
import { ContentGenerated } from './types'

export const PersonalizedAdsValuePage = () => {
  const [companyName, setCompany] = useState('City Furniture')
  const [audience, setAudience] = useState('Jane, female, age 36, sales associate')
  const [topic, setTopic] = useState('cancer pre screening services are available')
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState<ContentGenerated>({ emails: [] })
  const textStyle = {
    fontSize: '14pt'
  }
  

  const callOpenAi = async () => {
    setLoading(true)
    const response = await chat(`
    I am creating custom email advertisement for cancer pre-screening; create a list of 5 examples as json with the following format:
\`\`\`json
{
    "emails": {
        "title": string;
        "subtitle": string;
        "content": string;
    }
}
\`\`\`

kep in mind the following:
* tailor these emails for the following company: ${companyName}, audience: ${audience}, and topic: ${topic}
* add new lines \n where needed
* DO NOT OUTPUT ANYTHING BUT THE JSON
    `)
    setContent(JSON.parse(response?.match(/{.*}/s)?.toString() ?? '') as ContentGenerated)
    setLoading(false)
  }
  return (
    <Box>
      <Typography variant='h3' gutterBottom>
        <b>Generate my #GetScreened Campaign Materials Now!!!</b>
      </Typography>
      <Typography style={textStyle} paragraph>
        Making your message stand out can be challenging, but with personalized ads, you can achieve just that.
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant='h6' gutterBottom>
              Why Personalize Ads for Cancer Pre-Screening Services?
            </Typography>
            <Typography variant='body1' paragraph>
              1. <strong>Relevance:</strong> Personalized ads resonate more with the target audience. By tailoring
              messages specific to an organization's demographics and needs, the content becomes more relevant and
              impactful.
            </Typography>
            <Typography variant='body1' paragraph>
              2. <strong>Higher Engagement:</strong> Ads that are tailored to the viewer's interests and concerns are
              more likely to engage and hold their attention.
            </Typography>
            <Typography variant='body1' paragraph>
              3. <strong>Build Trust:</strong> Personalization shows that you understand and value the specific needs
              and interests of the organization. It builds credibility and trust, leading to stronger relationships.
            </Typography>
            <Typography variant='body1' paragraph>
              4. <strong>Increase in Conversion:</strong> Personalized campaigns often have higher conversion rates as
              they cater to the specific needs and concerns of the audience.
            </Typography>
            <Typography variant='body1' paragraph>
              5. <strong>Cost Efficiency:</strong> Targeted campaigns can lead to better utilization of marketing
              budgets, as the content is more likely to resonate with the intended audience.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant='h6' gutterBottom>
              Campaign Information
            </Typography>
            <Box my={1}>
              <TextField
                size='small'
                value={companyName}
                onChange={e => setCompany(e.target.value)}
                fullWidth
                label='Company Name'
                variant='outlined'
                margin='normal'
              />
              <TextField
                size='small'
                value={audience}
                onChange={e => setAudience(e.target.value)}
                fullWidth
                label='Audience'
                variant='outlined'
                margin='normal'
              />
              <TextField
                size='small'
                value={topic}
                onChange={e => setTopic(e.target.value)}
                fullWidth
                label='Topic'
                variant='outlined'
                margin='normal'
              />
            </Box>
            <Box mt={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <LoadingButton loading={loading} onClick={callOpenAi} variant='contained'>
                Submit
              </LoadingButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Box my={4}>{content.emails.length > 0 && <ChannelTabs emails={content.emails}></ChannelTabs>}</Box>
    </Box>
  )
}
