/* eslint-disable @next/next/no-img-element */
'use client'
import Box from '@mui/material/Box'
import Header from '@/components/Header'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { theme } from '@/styles'
import WhyPrescreening from '@/components/WhyPrescreening'
import FlipCard from '@/components/FlipCard'

import Grid from '@mui/material/Grid'
import CostBenefit from '@/components/CostBenefit'
import Swiper from '@/components/Swipe'
import { PersonalizedAdsValuePage } from '@/components/marketing/Personalization'
import { Divider, Typography } from '@mui/material'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Header></Header>
        <Box component='main' sx={{ flexGrow: 1, p: 15 }}>
          <Typography variant='h3'><b>Why Implement #GetScreened?</b></Typography>
          <div className='demo'>
            <br/>
            <Grid container spacing={1} columns={16}>
              <Grid container item spacing={1}>
                <Grid item xs={3}>
                  <FlipCard
                    frontText='Employee Health and Well-Being'
                    backText='Monitoring healthcare milestones helps ensure that employees receive appropriate preventive care, screenings, and early interventions. This can lead to improved overall health, reduced illness, and a higher quality of life for employees.'
                  ></FlipCard>
                </Grid>
                <Grid item xs={3}>
                  <FlipCard
                    frontText='Cost Management'
                    backText=' Tracking healthcare milestones can help employers identify and address health issues early, potentially reducing the overall cost of healthcare for both the employer and the employee. Preventive care and early treatment can often be less expensive than addressing advanced or chronic health conditions.'
                  ></FlipCard>
                </Grid>
                <Grid item xs={3}>
                  <FlipCard
                    frontText='Productivity and Absenteeism'
                    backText='Healthy employees are generally more productive and have lower absenteeism rates. By promoting and tracking healthcare milestones, employers can contribute to a healthier and more productive workforce.'
                  ></FlipCard>
                </Grid>
                <Grid item xs={3}>
                  <FlipCard
                    frontText='Employee Engagement and Satisfaction'
                    backText='Employees appreciate employers who care about their health and well-being. Providing access to healthcare resources and tracking milestones demonstrates a commitment to employee satisfaction and can enhance morale and loyalty.'
                  ></FlipCard>
                </Grid>
              </Grid>
              <Grid container item spacing={1}>
                <Grid item xs={3}>
                  <FlipCard
                    frontText='Customized Benefits'
                    backText='Employers can use data on healthcare milestones to tailor their benefits packages to the specific needs and preferences of their workforce. This can make benefits more attractive to employees and help with talent recruitment and retention.'
                  ></FlipCard>
                </Grid>
                <Grid item xs={3}>
                  <FlipCard
                    frontText='Risk Management'
                    backText='Employers can identify and manage health-related risks within their workforce. For example, if a significant portion of employees has certain risk factors, such as high blood pressure or high cholesterol, employers can implement wellness programs to address these issues proactively.'
                  ></FlipCard>
                </Grid>
                <Grid item xs={3}>
                  <FlipCard
                    frontText='Health Promotion and Education'
                    backText='Employers can use healthcare milestone data to educate employees about the importance of preventive care and healthy lifestyles. This can include wellness programs, health seminars, and resources to support healthier choices.'
                  ></FlipCard>
                </Grid>
                <Grid item xs={3}>
                  <FlipCard
                    frontText='Data-Driven Decision-Making'
                    backText='Tracking healthcare milestones provides valuable data that employers can use for strategic decision-making. It can help in evaluating the effectiveness of healthcare benefits, identifying trends in employee health, and making informed decisions about benefit plan design.'
                  ></FlipCard>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <Grid container>
            <Grid item xs={12} py={3} pb={12}>
              <Divider></Divider>
            </Grid>
            <Grid item xs={12}>
              <WhyPrescreening></WhyPrescreening>
            </Grid>
            <Grid item xs={12} py={3}>
              <Divider></Divider>
            </Grid>
            <Grid item xs={12} pt={3}>
              <CostBenefit></CostBenefit>
            </Grid>
            <Grid item xs={12} py={3}>
              <Divider></Divider>
            </Grid>
            <Grid item xs={12}>
              <Swiper></Swiper>
            </Grid>
            <Grid item xs={12} py={3}>
              <Divider></Divider>
            </Grid>
            <Grid item xs={12}>
              <PersonalizedAdsValuePage></PersonalizedAdsValuePage>
            </Grid>
            <Grid item xs={12} py={3}>
              <Divider></Divider>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
