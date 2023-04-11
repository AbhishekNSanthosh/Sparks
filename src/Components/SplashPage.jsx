import { Box, Stack } from '@mui/material'
import React from 'react'
import splashScreen from '../Assets/splashScreen.gif'

const SplashPage = () => {
    return (
        <Stack overflow='hidden'  bgcolor='black'>
            <Stack sx={{height:{xs:'800px'}}}>

            <Box ml={1} sx={{width:{xs:'100%',sm:'100%'},height:{xs:'100%',sm:'100%'}}} component='img' src={splashScreen} />
            </Stack>
        </Stack>
    )
}

export default SplashPage