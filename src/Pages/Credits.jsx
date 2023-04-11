import { Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import bg from '../Assets/depBg.svg'
import bg1 from '../Assets/backgrounds/background1.png'
import bg2 from '../Assets/backgrounds/background2.png'
import bg3 from '../Assets/backgrounds/background3.png'
import bg4 from '../Assets/backgrounds/background4.png'
import Navbar from '../Components/Navbar'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const Credits = () => {

    const [hideComponent, setHideComponent] = useState(true);
    const [backgroundImage, setBackgroundImage] = useState("");
    const backgroundImageUrls = [
        bg,
        bg1,
        bg2,
        bg3,
        bg4,
    ];



    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * backgroundImageUrls.length);
        setBackgroundImage(backgroundImageUrls[randomIndex]);
    }, []);

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        scrollToTop()
    }, [])

    useEffect(() => {

        const handleScroll = () => {
            if (window.pageYOffset > 20) {
                setHideComponent(false);
            } else {
                setHideComponent(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Stack>
            <Stack sx={{
                backgroundColor: 'rgba(5, 5, 5)',
                position: 'relative',
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,10) 100%),url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 'auto',
                backgroundAttachment: 'fixed'


            }}>
                <Stack>
                    <Navbar hideComponent={hideComponent} />
                </Stack>
                <Stack direction='column' sx={{ p: { xs: 1, sm: 5 }, mt: { sm: 10, xs: 12 } }}>
                    <Stack gap={2} sx={{ p: { xs: 1, sm: 2 } }} direction='column' alignItems='center' justifyContent='center'>
                        <Stack>
                            <Typography
                                sx={{
                                    mt: 1,
                                    mr: { xs: 2, sm: 10 },
                                    fontFamily: 'Kelly Slab',
                                    fontSize: { sm: '28px', xs: '15px' },
                                    fontWeight: '700',
                                }}>DESIGN TEAM</Typography>
                        </Stack>
                        <Stack gap={2} alignItems='center' justifyContent='center' display='flex' sx={{ flexDirection: { sm: 'row', xs: 'column' } }}>
                            <Stack flex={4} sx={{ p: { xs: 1, sm: 2 } }} alignItems='center' justifyContent='center' >
                                <Stack alignItems='center' justifyContent='center' sx={{ height: { sm: '250px', xs: '220px' }, width: { sm: '250px', xs: '280px' }, border: '1px solid red', borderRadius: '5px', backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.05))' }}>
                                    <PermIdentityIcon />
                                </Stack>
                            </Stack>
                            <Stack flex={4} sx={{ p: { xs: 1, sm: 2 } }} alignItems='center' justifyContent='center'>
                                <Stack alignItems='center' justifyContent='center' sx={{ height: { sm: '250px', xs: '220px' }, width: { sm: '250px', xs: '280px' }, border: '1px solid red', borderRadius: '5px', backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.05))' }}>
                                    <PermIdentityIcon />
                                </Stack >
                            </Stack>
                            <Stack flex={4} sx={{ p: { xs: 1, sm: 2 } }} alignItems='center' justifyContent='center'>
                                <Stack alignItems='center' justifyContent='center' sx={{ height: { sm: '250px', xs: '220px' }, width: { sm: '250px', xs: '280px' }, border: '1px solid red', borderRadius: '5px', backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.05))' }}>
                                    <PermIdentityIcon />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack gap={2} sx={{ p: { xs: 1, sm: 2 } }} direction='column' alignItems='center' justifyContent='center'>
                        <Stack gap={2} sx={{ p: { xs: 1, sm: 2 } }} direction='column' >
                            <Stack>


                                <Typography
                                    sx={{
                                        mt: 1,
                                        mr: { xs: 2, sm: 10 },
                                        fontFamily: 'Kelly Slab',
                                        fontSize: { sm: '28px', xs: '15px' },
                                        fontWeight: '700',
                                    }}>DEVELOPERS</Typography>
                            </Stack>
                        </Stack>
                        <Stack gap={2} alignItems='center' justifyContent='space-around' display='flex' sx={{ flexDirection: { sm: 'row', xs: 'column' } }}>
                            <Stack flex={4} sx={{ p: { xs: 1, sm: 2 } }} alignItems='center' justifyContent='center'>
                                <Stack alignItems='center' justifyContent='center' sx={{ height: { sm: '250px', xs: '220px' }, width: { sm: '250px', xs: '280px' }, border: '1px solid red', borderRadius: '5px', backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.05))' }}>
                                    <PermIdentityIcon />
                                </Stack>
                            </Stack>
                            <Stack flex={4} sx={{ p: { xs: 1, sm: 2 } }} alignItems='center' justifyContent='center'>
                                <Stack alignItems='center' justifyContent='center' sx={{ height: { sm: '250px', xs: '220px' }, width: { sm: '250px', xs: '280px' }, border: '1px solid red', borderRadius: '5px', backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.05))' }}>
                                    <PermIdentityIcon />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Credits