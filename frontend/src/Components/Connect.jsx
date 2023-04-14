import { IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';

const Connect = () => {

    const handleInstaClick = () => {
        window.open('https://instagram.com/sparkz_ccet?igshid=MjljNjAzYmU=', "_blank")
    }
  
    const handleYoutubeClick = () => {
        window.open('https://youtube.com/@sparkzccet', "_blank")
    }
 
    const handleWebClick = () => {
        window.open('https://carmelcet.in', "_blank")
    }


    return (
        <Stack sx={{ backgroundColor: 'rgba(52, 54, 52, 0.219)', p: { xs: 3, sm: 4 } }} direction='column' gap={3}  >
            <Stack justifyContent='start' alignItems='start'>
                <Typography sx={{
                    fontFamily: 'Kelly Slab',
                    fontSize: { xs: '25px', sm: '40px' },
                    fontWeight: '700'
                    ,
                    color: '#a3a3a0'

                }} >
                    CONNECT US
                </Typography>
            </Stack>
            <Stack  display='flex' sx={{ flexDirection: { xs: 'column', sm: 'row' } }} gap={3}>
                <Stack flex={5} direction='row' sx={{ mb: { xs: 3, sm: 1 } }} justifyContent='space-between' alignItems='center' >
                    <Stack gap={3} flex={6} >
                        <Stack>
                            <Typography sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize: { xs: '17px', sm: '20px' },
                                fontWeight: '300',
                                color: '#a3a3a0'

                            }} >
                                VISHNU PRASAD S
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize: { xs: '17px', sm: '20px' },
                                fontWeight: '300', color: '#a3a3a0'

                            }} >
                                SUBIN SUNNY
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize: { xs: '17px', sm: '20px' },
                                fontWeight: '300',
                                color: '#a3a3a0'

                            }} >
                                DIVYA V L
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize: { xs: '17px', sm: '20px' },
                                fontWeight: '300',
                                color: '#a3a3a0'

                            }} >
                                SARATH O
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack gap={3} flex={6} justifyContent='end' alignItems='end'>
                        <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
                            <CallIcon sx={{fontSize:'17px'}}/>
                            <Typography href="tel:+4733378901" sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize: { xs: '17px', sm: '20px' },
                                fontWeight: '300',
                                color: '#a3a3a0',
                                textDecoration: 'none'
                            }} >
                                <a href="tel:+917593942127" style={{ textDecoration: 'none', color: "inherit" }}>
                                    +91 7593942127
                                </a>
                            </Typography>
                        </Stack>
                        <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
                            <CallIcon sx={{fontSize:'17px'}}/>
                            <Typography sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize: { xs: '17px', sm: '20px' },
                                fontWeight: '300',
                                color: '#a3a3a0'

                            }} >
                                <a href="tel:+918075323850" style={{ textDecoration: 'none', color: "inherit" }}>
                                +91 8075323850
                                </a>

                            </Typography>
                        </Stack>
                        <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
                            <CallIcon sx={{fontSize:'17px'}}/>
                            <Typography sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize: { xs: '17px', sm: '20px' },
                                fontWeight: '300',
                                color: '#a3a3a0'

                            }} >
                                <a href="tel:+918589059517" style={{ textDecoration: 'none', color: "inherit" }}>
                                +91 8589059517
                                </a>

                            </Typography>
                        </Stack>
                        <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
                            <CallIcon sx={{fontSize:'17px'}}/>
                            <Typography sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize: { xs: '17px', sm: '20px' },
                                fontWeight: '300',
                                color: '#a3a3a0'

                            }} >
                                  <a href="tel:+918592809251" style={{ textDecoration: 'none', color: "inherit" }}>
                                  +91 8592809251
                                </a>
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack flex={6} sx={{p:{xs:2,sm:5}}} justifyContent='center' alignItems='center'>
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15743.240295000398!2d76.3430202!3d9.4380491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf49b9fc5a41d110a!2sCarmel%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1624884010736!5m2!1sen!2sin" width="100%" height="280" allowfullscreen="" loading="lazy" style={{ borderRadius: '10px' }}></iframe>
                </Stack>
                <Stack flex={1} display='flex' sx={{ flexDirection: { xs: 'row', sm: 'column' } }} gap={3} p={3} justifyContent='center' alignItems='center'>
                    <Stack>
                        <IconButton  onClick={handleYoutubeClick}>
                            <YouTubeIcon sx={{ fontSize:{sm: '50px',xs:'35px'} }} />
                        </IconButton>
                    </Stack>
                    <Stack>
                        <IconButton href='mailto:sparkzccet01@gmail.com'>
                            <EmailIcon  sx={{ fontSize:{sm: '50px',xs:'35px'} }} />
                        </IconButton>
                    </Stack>
                    <Stack>
                        <IconButton onClick={handleInstaClick}>
                            <InstagramIcon  sx={{ fontSize:{sm: '50px',xs:'33px'} }} />
                        </IconButton>
                    </Stack>
                    <Stack>
                        <IconButton onClick={handleWebClick}>
                            <LanguageIcon  sx={{ fontSize:{sm: '50px',xs:'32px'} }} />
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Connect