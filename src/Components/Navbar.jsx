import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from '../Assets/sparkzLogo.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { motion } from 'framer-motion'


const Navbar = ({ hideComponent,googleAuth ,user}) => {

    const location = useLocation();
    const [showLogo, setShowLogo] = useState(false);
    const [showEvents, setShowEvents] = useState(true)
    const [imgUrl, setImgUrl] = useState(user?.picture)

  



    useEffect(() => {
        if (location.pathname !== '/') {
            setShowLogo(true)
            setShowEvents(false)
        }
        if (location.pathname === '/dev-connect') {
            setShowEvents(true)
        }
    }, [])

    const navigate = useNavigate()

    const handleScrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' // to animate scrolling
        });
    };

    const logout = () => {
        console.log('res')
		window.open(`${process.env.REACT_APP_API_URL}auth/logout`, "_self");
	};

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Stack alignItems='center' zIndex='9999' width='100%' sx={{
                padding: { sm: 4, xs: 3 },
                backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 10), rgba(0, 0, 0, 0.05))'
            }} p={4} height='80px' position='fixed' display='flex' flexDirection='row' justifyContent='space-between'>

                <Stack sx={{ display: { sm: 'none', xs: 'flex' } }}>
                    {showEvents
                        ?
                        <Typography onClick={() => navigate('/branch')} sx={{
                            fontFamily: 'Kelly Slab',
                            fontSize: '13px',
                            fontWeight: '300',
                            zIndex: 1,
                            cursor: 'pointer',
                        }}>EVENTS</Typography>
                        :
                        <Typography onClick={handleScrollToBottom} sx={{
                            fontFamily: 'Kelly Slab',
                            fontSize: '13px',
                            fontWeight: '600',
                            zIndex: 1,
                            cursor: 'pointer',

                        }}>CONNECT US</Typography>
                    }
                </Stack>
                <Stack>
                    {showEvents ? <Typography onClick={() => navigate('/branch')} sx={{
                        fontFamily: 'Kelly Slab',
                        fontSize: '23px',
                        fontWeight: '600',
                        zIndex: 1,
                        cursor: 'pointer',
                        display: { xs: 'none', sm: 'block' }
                    }}>EVENTS</Typography>
                        :
                        <Typography onClick={handleScrollToBottom} sx={{
                            fontFamily: 'Kelly Slab',
                            fontSize: '23px',
                            fontWeight: '600',
                            zIndex: 1,
                            cursor: 'pointer',
                            display: { xs: 'none', sm: 'block' }
                        }}>CONNECT US</Typography>
                    }
                </Stack>
                {showLogo &&
                    <>
                        {hideComponent &&
                            <Stack>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <Stack  mt={6}>
                                        <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer', height: { sm: '110px', xs: '100px' }, width: { xs: '100px', sm: '110px' } }} width='150px' component='img' src={logo} />
                                    </Stack>
                                </motion.div>
                            </Stack>
                        }
                    </>
                }
                { !user ? 
                <>
                <Stack>
                    <Typography onClick={googleAuth} sx={{
                        fontFamily: 'Kelly Slab',
                        fontSize: '23px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: { xs: 'none', sm: 'block' }
                    }}>SIGN IN</Typography>
                </Stack>
                <Stack sx={{ display: { sm: 'none', xs: 'flex' } }}>
                    <Typography onClick={googleAuth} sx={{
                        fontFamily: 'Kelly Slab',
                        fontSize: '13px',
                        fontWeight: '300',
                        zIndex: 1,
                        cursor: 'pointer',
                    }}>SIGNIN</Typography>
                </Stack>
                        </>
                :
                <Stack sx={{ display: { sm: 'flex', xs: 'flex' } }} direction='row' justifyContent='center' alignItems='center' gap={1}>
                <Typography onclick={logout} sx={{
                        fontFamily: 'Kelly Slab',
                        fontSize:{sm: '23px',xs:'13px'},
                        fontWeight: '300',
                        zIndex: 1,
                        cursor: 'pointer',
                    }}>{user?.name}</Typography>
                    {/* <Box sx={{height:'35px',width:'35px',borderRadius:'50%',display:{xs:'none',sm:'flex'}}} component='img' src={imgUrl}/> */}
            </Stack>
                }

            </Stack>
        </motion.div>
    )
}

export default Navbar