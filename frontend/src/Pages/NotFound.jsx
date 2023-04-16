import { Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar'
import Connect from '../Components/Connect'
import Footer from '../Components/Footer'

const NotFound = () => {
    return (
        <Stack>
            <Stack>
                <Navbar />
            </Stack>
            <Stack mt={15}>
                <Stack>
                    <Typography sx={{
                        fontFamily: 'Kelly Slab',
                        fontSize: { sm: '40px', xs: '25px' },
                        fontWeight: '700',
                        color: '#a3a3a0'

                    }} >
                        FAQs
                    </Typography>
                </Stack>
            </Stack>
            <Stack>
                <Connect />
                <Footer />
            </Stack>
        </Stack>
    )
}

export default NotFound