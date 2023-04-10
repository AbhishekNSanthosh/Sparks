import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()
    return (
        <Stack sx={{ backgroundColor: 'rgba(5, 5, 5)' ,p:{xs:1,sm:2}}} width='100%' direction='row' >
            <Stack flex={4} alignItems='center' justifyContent='center'>
                <Stack mt={1}>

                    <Typography sx={{
                        fontFamily: 'Kelly Slab',
                        fontSize: { sm: '11px', xs: '8px' },
                        fontWeight: '700',
                        color: '#a3a3a0'

                    }} >
                        All right reserved®
                    </Typography>
                </Stack>
            </Stack>
            <Stack flex={4} alignItems='center' justifyContent='center'>
                <Button onClick={()=>navigate('/dev-connect')} sx={{ p: {xs:1,sm:2} ,border:'1px solid red',borderRadius:'5px'}}>
                    <Typography sx={{
                        fontFamily: 'Kelly Slab',
                        fontSize: { sm: '20px', xs: '7px' },
                        fontWeight: '700',
                        color: '#a3a3a0'

                    }} >
                        SPARKZ 23 WEBSITE TEAM
                    </Typography>
                </Button>
            </Stack>
            <Stack flex={4} alignItems='center' justifyContent='center'>
                <Stack mt={1} alignItems='center' justifyContent='center'>

                    <Typography sx={{
                        fontFamily: 'Kelly Slab',
                        fontSize: { sm: '11px', xs: '8px' },
                        fontWeight: '700',
                        color: '#a3a3a0'

                    }} >
                        ©2023 - Sparkz CCET
                    </Typography>
                </Stack>
            </Stack>
        </Stack >
    )
}

export default Footer