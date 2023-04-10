import { Stack } from '@mui/material'
import React from 'react'
import Footer from '../Components/Footer'

const Register = () => {
    return (
        <Stack>
            <Stack sx={{
                position: 'relative',
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,16) 100%),url(${bgImg2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '510px',
                transition: 'transform 0.3s ease',
                '&:hover': {
                    backgroundColor: 'lightgray',
                    cursor: 'pointer',
                    transform: 'scale(1.09)'
                },


            }}>

            </Stack>
            <Footer />
        </Stack>
    )
}

export default Register