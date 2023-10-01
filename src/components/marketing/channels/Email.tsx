import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { ContentGenerated } from '../types'

export const sampleEmails = [
  {
    subject: 'Breast Cancer Screening Reminder',
    subtitle: 'Your Health Matters',
    content:
      "Dear Jane, breast cancer screening can save lives through early detection. Don't forget to book your annual mammogram!"
  },
  {
    subject: 'Colon Cancer Screening Invitation',
    subtitle: 'Prevention is Key',
    content: "John, it's recommended to have regular colon screenings starting at age 50. Have you scheduled yours?"
  },
  {
    subject: 'Cervical Cancer Screening',
    subtitle: 'Regular Check-ups Make a Difference',
    content: 'Dear Jane, a reminder to schedule your regular Pap test. Prioritize your health.'
  },
  {
    subject: 'Prostate Cancer Screening Reminder',
    subtitle: 'Stay Informed',
    content: 'John, early detection of prostate cancer can be vital. Have you considered scheduling a PSA test?'
  },
  {
    subject: 'Lung Cancer Screening',
    subtitle: 'Breathe Easy',
    content:
      'Dear Jane, if you have a history of smoking, early lung cancer screening can be life-saving. Schedule your appointment today.'
  },
  {
    subject: 'Skin Cancer Screening Alert',
    subtitle: 'Sun Safety Reminder',
    content:
      'John, have you checked your skin lately? Regular dermatologist check-ups can help detect skin cancer early. Stay sun safe!'
  }
]

interface EmailAdvertisementCardProps {
  subject: string
  subtitle: string
  content: string
}

const EmailAdvertisementCard: React.FC<ContentGenerated['emails'][number]> = params => {
  return (
    <Card style={styles.card}>
      <CardHeader title={params.title} subheader={params.subtitle} />
      <CardContent
        style={{
          whiteSpace: 'pre-line'
        }}
      >
        <Typography variant='body2' color='textSecondary' component='p'>
          {params.content}
        </Typography>
      </CardContent>
    </Card>
  )
}

const styles = {
  card: {
    width: '100%',
    margin: '20px',
    border: '1px solid #e0e0e0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  }
}

export default EmailAdvertisementCard
