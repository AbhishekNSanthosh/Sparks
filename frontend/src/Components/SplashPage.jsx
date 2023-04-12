import { Box, Stack } from '@mui/material'
import React from 'react'
import splashScreen from '../Assets/splashScreen.gif'
import mobileSplash from '../Assets/loadingMobile.gif'

const SplashPage = () => {
    return (
        <Stack   bgcolor='black' justifyContent='center' alignItems='center'>
            <Stack sx={{height:{xs:'685px'}}} overflow='hidden' justifyContent='center' alignItems='center'>

            <Box ml={1} sx={{width:{xs:'100%',sm:'100%'},height:{xs:'100%',sm:'100%'},display:{xs:'none',sm:"flex"}}} component='img' src={splashScreen} />
            <Box ml={1} sx={{width:{xs:'100%',sm:'100%'},height:{xs:'750px',sm:'100%'},display:{xs:'flex',sm:"none"}}} component='img' src={mobileSplash} mb={5}/>
            </Stack>
        </Stack>
    )
}

export default SplashPage