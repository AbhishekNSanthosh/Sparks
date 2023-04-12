import { Box, Stack } from '@mui/material'
import React from 'react'
import splashScreen from '../Assets/splashScreen.gif'
import mobileSplash from '../Assets/loadingMobile.gif'

const SplashScreenPage = () => {
  return (
    <Stack overflow='hidden' alignItems='center' justifyContent='center' sx={{backgroundColor:'black',overflowY:'hidden'}}>
<Box component='img' src={splashScreen} sx={{display:{xs:'none',sm:'block'},height:'100vh'}}/>
<Box component='img' src={mobileSplash} sx={{display:{xs:'block',sm:'none'},height:'100vh'}}/>
    </Stack>
  )
}

export default SplashScreenPage