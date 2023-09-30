import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import PersonalRecommendation from '@/components/PersonalRecommendation'

export default function Recommendation() {
  return (
    <Box>
      <Box>
        <h1>Personalized Employee Screening Recommendations</h1>
      </Box>
      <Box>
        Each employee will receive personalized recommendations based on their age and the average risk for certain cancers. Screenings are often overlooked due to the four main screening barriers: fear, procrastination, lack of insurance, and lack of symptoms. The American Cancer Society strives to overcome those barriers by telling the stories of people with cancer, survivors, and by connecting employees to convenient providers allowing them to check the box when it comes to getting their annual screenings.
      </Box>
      <Box>
        <PersonalRecommendation></PersonalRecommendation>
      </Box>
      <Box>
        See more in-depth recommendations in <Link href='https://www.cancer.org/cancer/screening/screening-recommendations-by-age.html'>Cancer Screening Guidelines by Age</Link>.
      </Box>
    </Box>
  )
}
