import { Box, Button, Grid, MobileStepper, Paper, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
// @ts-ignore
import SwipeableViews from 'react-swipeable-views-react-18-fix'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ScreeningTips from './ScreeningTips';

const images = [
  {
    label: 'How Does #GetScreened Work?',
    details: 'We encourage all employees to get the screenings they need to stay healthy and to catch problems early, while they can be treated more easily. Fortunately, the American Cancer Society is connected with some of the best health care providers in the world to provide high-quality care from your organization',
    imgPath: '1.png'
  },
  {


    label: 'HR Materials & Resources',
    imgPath: '2.jpeg',
    details: `The American Cancer Society provides company leadership with diversified marketing materials. This includes:
    Flyers on the event
    Videos and information on our providers
    Templates for company message boards, newsletters, email blasts, bulletin boards or social channels to promote your #GetScreened initiative.
    Cancer Screening Guide`

  },
  {
    label: 'Connecting Employees to Providers',
    imgPath: '3.jpeg',
    details: `
    The screening tests you need and when you need to get them might be different from other people because of your age, sex at birth, and certain risk factors you may have, this is why the American Cancer Society will tailor recommended screenings based on your employee data
    Find a Provider navigation system will allow employees  to easily search for screening providers nearby`

  },
  {
    label: 'Providing Data on Initiative',
    imgPath: '4.jpeg',
    details: `Tracking healthcare milestones helps employers take a proactive approach to employee health and benefit management. 
    #GetScreened not only supports the well-being of the workforce but also contributes to a healthier and more productive work environment, which can have a positive impact on the bottom line and the overall success of the organization.
    `
  }
]

export default function Swiper() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }

  return (
    <Box sx={{ maxHeight: 600, flexGrow: 1 }}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default'
        }}
      >
              <b>{images[activeStep].label}</b>

      </Paper>
      <br></br> */}
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <ScreeningTips
            key={index}
            title={step.label}
            image={step.imgPath}
            text={step.details}
          />
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        nextButton={
          <Button size='small' onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </Box>
  )
}
