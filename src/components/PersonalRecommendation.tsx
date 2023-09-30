import Box from '@mui/material/Box'

var ageGroup = 'Age 40–49 Screening recommendations';
var recommendations = [
  'Breast cancer screening recommended beginning at age 45, with the option to begin at age 40.',
  'Cervical cancer screening recommended for people with a cervix.',
  'Colorectal cancer screening recommended for everyone beginning at age 45.',
  'At age 45, African Americans should discuss prostate cancer screening with a doctor.'
];

export default function Recommendation() {
  return (
    <Box>
      <Box>
        <h2>{ageGroup}</h2>
        <ul>
          {recommendations.map( (recommendation) =>
            (
              <li>{recommendation}</li>
            )
          )}
        </ul>
      </Box>
    </Box>
  )
}
