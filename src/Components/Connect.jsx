import { IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const Connect = () => {
    return (
        <Stack sx={{ backgroundColor: 'rgba(52, 54, 52, 0.219)' ,p:{xs:3,sm:5}}} direction='column' gap={3}  >
            <Stack justifyContent='start' alignItems='start'>
                <Typography sx={{
                    fontFamily: 'Kelly Slab',
                    fontSize: {xs:'25px',sm:'40px'},
                    fontWeight: '700'
                    ,
                                color:'#a3a3a0'

                }} >
                    CONNECT US
                </Typography>
            </Stack>
            <Stack display='flex' sx={{flexDirection:{xs:'column',sm:'row'}}} gap={3}>
                <Stack flex={5} direction='row' sx={{mb:{xs:3,sm:1}}} justifyContent='space-between' alignItems='center' >
                    <Stack flex={6} >
                        <Stack>
                            <Typography sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize: {xs:'17px',sm:'20px'},
                                fontWeight: '300',
                                color:'#a3a3a0'

                            }} >
                                VISHNU PRASAD S
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize: {xs:'17px',sm:'20px'},
                                fontWeight: '300', color:'#a3a3a0'

                            }} >
                                SUBIN SUNNY
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize: {xs:'17px',sm:'20px'},
                                fontWeight: '300',
                                color:'#a3a3a0'

                            }} >
                                DIVYA V L
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize: {xs:'17px',sm:'20px'},
                                fontWeight: '300',
                                color:'#a3a3a0'

                            }} >
                                SARATH O
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack flex={6} justifyContent='end' alignItems='end'>
                        <Stack>
                            <Typography sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize:{xs:'17px',sm:'20px'},
                                fontWeight: '300',
                                color:'#a3a3a0'

                            }} >
                                7593942127
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize:{xs:'17px',sm:'20px'},
                                fontWeight: '300',
                                color:'#a3a3a0'

                            }} >
                                8075323850
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize:{xs:'17px',sm:'20px'},
                                fontWeight: '300',
                                color:'#a3a3a0'

                            }} >
                                8589059517
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography sx={{
                                 fontFamily: 'Kelly Slab',
                                fontSize: {xs:'17px',sm:'20px'},
                                fontWeight: '300',
                                color:'#a3a3a0'

                            }} >
                                8592809251
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack flex={5}>
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15743.240295000398!2d76.3430202!3d9.4380491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf49b9fc5a41d110a!2sCarmel%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1624884010736!5m2!1sen!2sin" width="100%" height="280" allowfullscreen="" loading="lazy" style={{ borderRadius: '10px' }}></iframe>
                </Stack>
                <Stack flex={2} display='flex' sx={{flexDirection:{xs:'row',sm:'column'}}} gap={3} p={3} justifyContent='center' alignItems='center'>
                    <Stack>
                        <IconButton>
                            <YouTubeIcon sx={{ fontSize: '50px' }} />
                        </IconButton>
                    </Stack>
                    <Stack>
                        <IconButton>
                            <EmailIcon sx={{ fontSize: '50px' }} />
                        </IconButton>
                    </Stack>
                    <Stack>
                        <IconButton>
                            <InstagramIcon sx={{ fontSize: '50px' }} />
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Connect