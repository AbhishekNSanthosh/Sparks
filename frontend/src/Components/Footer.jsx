import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()
    return (
        <Stack gap={1} pb={3} sx={{ backgroundColor: 'rgba(5, 5, 5)', p: { xs: 1, sm: 2 } }} width='100%' direction='column' >
            <Stack direction='row' alignItems='center' justifyContent='center'>
                <Stack mt={1} gap={1} alignItems='center' justifyContent='center' direction='column'>

                    <Typography sx={{
                        fontFamily: 'Kelly Slab',
                        fontSize: { sm: '16px', xs: '8px' },
                        fontWeight: '700',
                        color: '#a3a3a0'

                    }} >
                        Carmel College of Engineering & Technology.
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Kelly Slab',
                        fontSize: { sm: '12px', xs: '8px' },
                        fontWeight: '700',
                        color: '#a3a3a0'

                    }} >
                       Punnapra | Alappuzha-688004, Kerala
                    </Typography>
                </Stack>
            </Stack>
            <Stack width='100%' direction='row' >
                <Stack flex={4} alignItems='center' justifyContent='center'>
                    <Stack mt={1}>

                        <Typography sx={{
                            fontFamily: 'Kelly Slab',
                            fontSize: { sm: '16px', xs: '8px' },
                            fontWeight: '700',
                            color: '#a3a3a0'

                        }} >
                            All rights reserved®
                        </Typography>
                    </Stack>
                </Stack>
                <Stack flex={4} alignItems='center' justifyContent='center' direction='column' gap={1}>
                    <Typography sx={{
                        fontFamily: 'Kelly Slab',
                        fontSize: { sm: '12px', xs: '7px' },
                        fontWeight: '700',
                        color: '#a3a3a0'

                    }} >
                        POWERED BY
                    </Typography>
                    <Button onClick={() => navigate('/dev-connect')} sx={{ p: { xs: 1, sm: 2 }, border: '1px solid red', borderRadius: '5px' }}>
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
                            fontSize: { sm: '16px', xs: '8px' },
                            fontWeight: '700',
                            color: '#a3a3a0'

                        }} >
                            ©2023 - OBCYDIANSCCET
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack >
    )
}

export default Footer