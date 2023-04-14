import { Box, Stack } from '@mui/material'
import React from 'react'
import musicConcert from '../Assets/musicConcert.png'

const MusicConcert = () => {
  return (
    <Stack>
        <Box  component='img' src={musicConcert}/>
    </Stack>
  )
}

export default MusicConcert