import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function CompanyForm() {
  return (
    <Box>
      <TextField
        required
        id='outlined-required'
        label='Required'
        defaultValue='Enter your company / industry here to get customized content'
        fullWidth
      />
    </Box>
  )
}
