import React from 'react'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import bgImg1 from '../Assets/backgrounds/background1.svg'
import bgImg2 from '../Assets/backgrounds/background1.png'
import bgImg3 from '../Assets/backgrounds/background2.png'
import bgImg4 from '../Assets/backgrounds/background3.png'
import bgImg5 from '../Assets/backgrounds/background4.png'
import mobileBg from '../Assets/bgMobile.png'
// import bgImg2 from '../Assets/bgImg.svg'
import logo from '../Assets/sparkzLogo.svg'
import events from '../Assets/events.svg'
import clgLogo from '../Assets/clgLogo.svg'
import './styles.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import Connect from '../Components/Connect'
import Partners from '../Components/Partners'
import { light } from '@mui/material/styles/createPalette'
import Faqs from '../Components/Faqs'
import Footer from '../Components/Footer'



const MainPage = ({user}) => {

    const googleAuth = (data) => {
		window.open(
			`${process.env.REACT_APP_API_URL}auth/google/callback`,
			"_self"
		);
	};


    const targetDate = new Date("April 19, 2023").getTime();
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const [backgroundImage, setBackgroundImage] = useState("");
    const backgroundImageUrls = [
        bgImg1,
        bgImg2,
        bgImg3,
        bgImg4,
        bgImg5,
    ];



    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * backgroundImageUrls.length);
        setBackgroundImage(backgroundImageUrls[randomIndex]);
    }, []);

    const navigate = useNavigate()

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        scrollToTop()
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const timeRemaining = targetDate - now;

            if (timeRemaining > 0) {
                const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hoursRemaining = Math.floor(
                    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutesRemaining = Math.floor(
                    (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
                );
                const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                setDays(daysRemaining);
                setHours(hoursRemaining);
                setMinutes(minutesRemaining);
                setSeconds(secondsRemaining);
            } else {
                clearInterval(intervalId);
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);


     
   
    return (
        <Stack>
            {/* parent stack */}
            <Stack className='container' direction='column'
                sx={{
                    position: 'relative',
                    backgroundImage: { sm: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,20) 100%),url(${backgroundImage})`, xs: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(1,1,1,25) 100%),url(${mobileBg})` },
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: { sm: '210vh', xs: '173vh' },
                    backgroundAttachment: 'fixed'

                }}>

                {/* navbar stack */}


                <Navbar googleAuth={googleAuth} user={user} />

                {/* logo stack */}
                <Stack ml={5} mt={3} justifyContent='center' alignItems='center'>
                    <Box component='img' src={logo} sx={{
                        height: { xs: '120px', sm: '250px' },
                        width: { xs: '120', sm: '250px' }
                    }} />
                </Stack>
                <Stack direction='column' p={3} justifyContent='center' alignItems='center' sx={{ marginTop: { xs: '100px', sm: '10px' } }}>
                    <Stack>
                        <Typography
                            sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize: { sm: '30px', xs: '20px' },
                                fontWeight: { xs: '500', sm: '700' }
                            }}>{days}d : {hours}h : {minutes}m : {seconds}s</Typography>
                    </Stack>
                </Stack>
                {/* title and date */}
                <Stack zIndex='1' display='flex' sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>

                    <Stack flex={6} direction='column' justifyContent='center' alignItems='center' sx={{
                        display: { xs: 'flex', sm: 'none' },
                        p: { xs: 1, sm: 3 }
                    }}>
                        <Stack>
                            <Typography
                                sx={{
                                    fontFamily: 'Kelly Slab',
                                    fontSize: '30px',
                                    fontWeight: '700'
                                }}>APRIL</Typography>
                        </Stack>
                        <Stack>
                            <Typography
                                sx={{
                                    fontFamily: 'Kelly Slab',
                                    fontSize: '30px',
                                    fontWeight: '700'
                                }}>19 | 20</Typography>
                        </Stack>
                    </Stack>
                    <Stack flex={6} p={3} direction='column' sx={{ p: { xs: 2 } }}>
                        <Stack direction='column' justifyContent='center' alignItems='center'>
                            <Typography
                                sx={{
                                    fontFamily: 'Kelly Slab',
                                    fontSize: { xs: '50px', sm: '70px' },
                                    fontWeight: '700'
                                }}>SPARKZ</Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'Kelly Slab',
                                    fontSize: { xs: '20', sm: '30px' },
                                    fontWeight: '700'
                                }}>INNOVATION UNLEASHED</Typography>
                        </Stack>
                    </Stack>
                    <Stack flex={6} p={3} direction='column' justifyContent='center' alignItems='center' sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <Stack>
                            <Typography
                                sx={{
                                    fontFamily: 'Kelly Slab',
                                    fontSize: '50px',
                                    fontWeight: '700'
                                }}>APRIL</Typography>
                        </Stack>
                        <Stack>
                            <Typography
                                sx={{
                                    fontFamily: 'Kelly Slab',
                                    fontSize: '40px',
                                    fontWeight: '700'
                                }}>19 | 20</Typography>
                        </Stack>
                    </Stack>
                </Stack>


                {/* event button */}

                <Stack onClick={() => navigate('/branch')} mt={10} p={3} justifyContent='center' alignItems='center' sx={{
                    mt: { xs: 1, sm: 10 },
                }}>
                    <Stack justifyContent='center' alignItems='center' sx={{
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: { xs: 'none', sm: 'scale(1.4)' }
                        },
                    }}>

                        <Box sx={{
                            height: { xs: '50px' },
                            cursor: 'pointer',
                        }} component='img' src={events} className='hue-shift-button' />

                        <Typography sx={{
                            fontFamily: 'Kelly Slab',
                            fontSize: { sm: '40px', xs: '25px' },
                            fontWeight: '700',
                            position: 'absolute'
                            ,
                            color: '#f5f5ef',

                        }} >
                            EVENTS
                        </Typography>
                    </Stack>

                </Stack>
                {/* About section */}
                <Stack sx={{ mt: { xs: 1, sm: 5 }, p: { xs: 2, sm: 5 }, backgroundColor: 'rgba(5, 5, 5)' }} direction='column' gap={3} justifyContent='center' alignItems='center'>
                    <Stack justifyContent='center' alignItems='center' mb={3}>
                        <Typography sx={{
                            fontFamily: 'Kelly Slab',
                            fontSize: '40px',
                            fontWeight: '700',
                            color: '#b9b9b1'

                        }} >
                            ABOUT US
                        </Typography>
                    </Stack>
                    <Stack sx={{
                        padding: { sm: '0px 70px', xs: '0px 15px' },
                        textAlign: 'center'
                    }}>
                        <Typography
                            sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize: { xs: '17px', sm: '20px' },
                                fontWeight: '300',
                                color: '#a3a3a0'
                            }} >
                            Lorem ipsum dolor sit amet. Est voluptates omnis et dolor libero sed rerum omnis est ratione dolores aut culpa voluptatem in pariatur fugiat non obcaecati assumenda. At alias mollitia sit laboriosam dolore et voluptas rerum rem ipsam similique non voluptatem voluptas ut repellendus reiciendis non dolorem omnis. Ut quia quasi et soluta rerum eos voluptate pariatur non porro voluptatem id placeat sapiente sed nihil voluptas. Ab explicabo sequi in totam unde qui alias quidem?
                        </Typography>
                    </Stack>

                </Stack>
                <Stack sx={{ backgroundColor: 'rgba(5, 5, 5)' }} mt='-50'>

                    <Stack alignItems='center' justifyContent='center' >
                        <Stack p={3}>
                            <Box sx={{ height: { sm: '200px', xs: '120px' }, width: { sm: '200px', xs: '120px' } }} width='200px' component='img' src={clgLogo} />
                        </Stack>
                    </Stack>
                    {/* Partners */}
                    <Stack direction='column' gap={3} p={5} justifyContent='center' alignItems='center'>
                        <Stack >
                            <Typography sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize: { sm: '40px', xs: '25px' },
                                fontWeight: '700',
                                color: '#a3a3a0'

                            }} >
                                PARTNERS
                            </Typography>
                        </Stack>
                        <Stack sx={{ height: { sm: '300px', xs: '250px' } }}>
                            <Partners />
                        </Stack>
                        {/* faqs */}
                        <Stack >
                            <Stack p={5} justifyContent='center' alignItems='center'>

                                <Typography sx={{
                                    fontFamily: 'Kelly Slab',
                                    fontSize: { sm: '40px', xs: '25px' },
                                    fontWeight: '700',
                                    color: '#a3a3a0'

                                }} >
                                    FAQs
                                </Typography>

                            </Stack>
                            <Stack p={1} sx={{ width: { xs: '320px', sm: '1100px' } }} borderRadius='5px' border='1px solid gray'>
                                <Faqs />
                            </Stack>
                        </Stack>
                    </Stack>
                    {/* Connect us */}
                    <Connect />
                    <Footer />
                </Stack>

            </Stack>
        </Stack>
    )
}

export default MainPage