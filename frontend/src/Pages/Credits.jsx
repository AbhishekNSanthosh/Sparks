import { Box, IconButton, Link, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import bg from '../Assets/depBg.svg'
import bg1 from '../Assets/backgrounds/background1.png'
import bg2 from '../Assets/backgrounds/background2.png'
import bg3 from '../Assets/backgrounds/background3.png'
import bg4 from '../Assets/backgrounds/background4.png'
import bg6 from '../Assets/backgrounds/bg8.png'
import Navbar from '../Components/Navbar'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import abhiram from '../Assets/dev/abhiram.png'
import aswin from '../Assets/dev/aswin.png'
import aravind from '../Assets/dev/aravind.png'
import abhishek from '../Assets/dev/abhishek.png'
import arnold from '../Assets/dev/arnold.png'
import hari from '../Assets/dev/hairkrishnan.png'
import Connect from '../Components/Connect'
import InstagramIcon from '@mui/icons-material/Instagram';
import { SocialIcon } from 'react-social-icons';


const Credits = () => {

    const [hideComponent, setHideComponent] = useState(true);
    const [backgroundImage, setBackgroundImage] = useState("");
    const [hoveredIndex, setHoveredIndex] = useState(null);


    const backgroundImageUrls = [
        bg,
        bg1,
        bg2,
        bg3,
        bg4,
        bg6
    ];


    const designer = [
        { img: abhiram, name: "ABHIRAM VENUGOPAL", sem: 'S6 CSE', insta: "", insta: 'https://instagram.com/mar._101?igshid=MjljNjAzYmU=' },
        { img: aswin, name: " ASWIN S SESHADRI", sem: 'S6 CSE', insta: 'https://instagram.com/aswinmorales?igshid=MjljNjAzYmU=' },
        { img: aravind, name: "ARAVIND KRISHNAN K", sem: 'S6 CSE', insta: "https://instagram.com/arvi_14z?igshid=MjljNjAzYmU=" }
    ]

    const developers = [
        { img: abhishek, name: "ABHISHEK S", sem: 'S2 CSE', insta: 'https://www.instagram.com/abhi_shek_abhii__/' },
        { img: arnold, name: "ARNOLD DENZIL", sem: 'S8 CSE', insta: 'https://www.instagram.com/arnold_denzil/' },
        { img: hari, name: "HARIKRISHNAN E V", sem: 'S8 CSE', insta: 'https://www.instagram.com/hari_krishnan_hrk/' }
    ]

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

    const handleButtonClick = (data) => {
        window.open(data, "_blank");
    };

    return (
        <Stack >
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
                <Stack mt={3} direction='column' sx={{ p: { xs: 1, sm: 5 }, mt: { sm: 10, xs: 12 } }}>
                    <Stack gap={2} sx={{ p: { xs: 1, sm: 2 } }} direction='column' alignItems='center' justifyContent='center'>
                        <Stack gap={2} sx={{ p: { xs: 1, sm: 2 } }} direction='column' >
                            <Stack justifyContent='center' alignItems='center'>


                                <Typography
                                    sx={{
                                        mt: 1,
                                        fontFamily: 'Kelly Slab',
                                        fontSize: { sm: '28px', xs: '25px' },
                                        fontWeight: '700',
                                    }}>DEVELOPERS</Typography>
                            </Stack>
                        </Stack>
                        <Stack gap={2} alignItems='center' justifyContent='space-around' display='flex' sx={{ flexDirection: { sm: 'row', xs: 'column' } }}>
                            {developers && developers.map((design, index) => (
                                <Stack key={index} direction='column' flex={4} sx={{ p: { xs: 1, sm: 2 } }} alignItems='center' justifyContent='center' gap={3}>
                                    <Link href={design?.insta}>
                                        <Stack position='relative' className='profile-image' onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} alignItems='center' justifyContent='center' sx={{ height: { sm: '250px', xs: '220px' }, width: { sm: '250px', xs: '250px' }, border: '1px solid red', borderRadius: '10px', backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.05))' }}>
                                            <Box sx={{ height: { sm: '250px', xs: '250px' }, width: { sm: '250px', xs: '250px' } }} component='img' src={design?.img} />

                                            {hoveredIndex === index &&
                                                <Stack borderRadius='10px' alignItems='center' justifyContent='center' sx={{ position: 'absolute', height: { sm: '250px', xs: '250px' }, width: { sm: '250px', xs: '250px' }, cursor: 'pointer', backgroundImage: 'linear-gradient(rgba(209, 71, 71, 0.5), rgba(236, 69, 69, 0.5))' }}>
                                                    <Link href={design?.insta}>
                                                        <InstagramIcon sx={{
                                                            color: 'red',
                                                            fontSize: '100px'
                                                        }} className="instagram-icon" />
                                                    </Link>
                                                </Stack>
                                            }
                                        </Stack>
                                    </Link>

                                    <Stack gap={2} justifyContent='center' alignItems='center' direction='column'>
                                        <Stack gap={1} direction='row' justifyContent='center' alignItems='center'>

                                            <SocialIcon  style={{ height: '30px', width: '30px',marginTop:'1px' }} url={`${design?.insta}`} />
                                            <Typography
                                                sx={{
                                                    mt: 1,
                                                    fontFamily: 'Kelly Slab',
                                                    fontSize: { sm: '18px', xs: '15px' },
                                                    fontWeight: '700',
                                                    textDecoration: 'none', color: 'inherit'
                                                }}>{design?.name}</Typography>
                                        </Stack>
                                        <Typography
                                            sx={{
                                                mt: 1,
                                                fontFamily: 'Kelly Slab',
                                                fontSize: { sm: '18px', xs: '15px' },
                                                fontWeight: '700',
                                                textDecoration: 'none', color: 'inherit'
                                            }}>{design?.sem}</Typography>
                                    </Stack>
                                </Stack>

                            ))}
                        </Stack>
                    </Stack>
                    <Stack gap={2} sx={{ p: { xs: 1, sm: 2 } }} direction='column' alignItems='center' justifyContent='center'>
                        <Stack alignItems='center' justifyContent='center'>
                            <Typography
                                sx={{
                                    mt: 1,
                                    fontFamily: 'Kelly Slab',
                                    fontSize: { sm: '30px', xs: '25px' },
                                    fontWeight: '700',
                                }}>DESIGN TEAM</Typography>
                        </Stack>
                        <Stack gap={2} alignItems='center' justifyContent='center' display='flex' sx={{ flexDirection: { sm: 'row', xs: 'column' } }}>
                            {designer && designer.map((design, index) => (
                                <Stack key={index + 3} direction='column' flex={4} sx={{ p: { xs: 1, sm: 2 }, textDecoration: 'none', color: 'inherit' }} alignItems='center' justifyContent='center' gap={3}>
                                    <Link href={design?.insta}>
                                        <Stack position='relative' className='profile-image' onMouseEnter={() => setHoveredIndex(index + 3)} onMouseLeave={() => setHoveredIndex(null)} alignItems='center' justifyContent='center' sx={{ height: { sm: '250px', xs: '220px' }, width: { sm: '250px', xs: '250px' }, border: '1px solid red', borderRadius: '10px', backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.05))' }}>
                                            <Box sx={{ height: { sm: '250px', xs: '250px' }, width: { sm: '250px', xs: '250px' } }} component='img' src={design?.img} />

                                            {hoveredIndex === index + 3 &&
                                                <Stack borderRadius='10px' alignItems='center' justifyContent='center' sx={{ position: 'absolute', height: { sm: '250px', xs: '250px' }, width: { sm: '250px', xs: '250px' }, cursor: 'pointer', backgroundImage: 'linear-gradient(rgba(209, 71, 71, 0.5), rgba(236, 69, 69, 0.5))' }}>
                                                    <Link href={design?.insta}>

                                                        <InstagramIcon sx={{
                                                            color: 'red',
                                                            fontSize: '100px'
                                                        }} className="instagram-icon" />

                                                    </Link>
                                                </Stack>

                                            }
                                        </Stack>
                                    </Link>
                                    <Stack justifyContent='center' alignItems='center' direction='column' >
                                        <Stack gap={1} direction='row' justifyContent='center' alignItems='center'>

                                            <SocialIcon style={{ height: '30px', width: '30px',marginTop:'1px' }} url={`${design?.insta}`} />
                                            <Typography
                                                sx={{
                                                    mt: 1,
                                                    fontFamily: 'Kelly Slab',
                                                    fontSize: { sm: '18px', xs: '15px' },
                                                    fontWeight: '700',
                                                    textDecoration: 'none', color: 'inherit'
                                                }}>{design?.name}</Typography>
                                        </Stack>
                                        <Typography
                                            sx={{
                                                mt: 1,
                                                fontFamily: 'Kelly Slab',
                                                fontSize: { sm: '18px', xs: '15px' },
                                                fontWeight: '700',
                                                textDecoration: 'none', color: 'inherit'
                                            }}>{design?.sem}</Typography>
                                    </Stack>
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Connect />
        </Stack>
    )
}

export default Credits