import Box from '@mui/material/Box'
import ReactPlayer from 'react-player'

export default function Entry() {
  return (
    <Box>
      <Box>
        <h1>Get Screened for Organizations</h1>
      </Box>
      <Box>
        <h2>Why should you get screened?</h2>
      </Box>
      <Box>
        <ReactPlayer url={'https://www.youtube.com/watch?v=uOFpbbK1bOg'} controls={true} />
      </Box>
      <br/>
    </Box>
  )
}
