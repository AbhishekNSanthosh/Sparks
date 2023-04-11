import { Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Footer from '../Components/Footer'
import bg from '../Assets/depBg.svg'
import bg1 from '../Assets/backgrounds/background1.png'
import bg2 from '../Assets/backgrounds/background2.png'
import bg3 from '../Assets/backgrounds/background3.png'
import bg4 from '../Assets/backgrounds/background4.png'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import Cookies from 'js-cookie'
import Connect from '../Components/Connect'

const Register = ({user}) => {
    const [backgroundImage, setBackgroundImage] = useState("");
    const [hideComponent, setHideComponent] = useState(true);
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [semester, setSemester] = useState('')
    const [department, setDepartment] = useState('')
    const [college, setCollege] = useState('')



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

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 10) {
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

    const createUser = () => {
        axios.post(process.env.REACT_APP_API_URL + 'users/createUser', {
            username, email, mobileNo, semester, branch: department, college
        }).then((res) => {
            console.log(res.data.data._id)
            Cookies.set('userId',res.data.data._id)
            navigate('/')
        }).catch((err) => {
            if (err) {
                window.location.reload()
            }
        })
    }

    const params = useParams()

    const navigate = useNavigate()

 useEffect(() => {
   if(user){
    navigate('/')
   }
 }, [])

 
 

    return (
        <Stack height='100%'>
            <Stack sx={{
                backgroundColor: 'rgba(5, 5, 5)',
                position: 'relative',
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,17) 100%),url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 'auto',
                backgroundAttachment: 'fixed'
            }}>

                <Stack >
                    <Navbar hideComponent={hideComponent} user={user}/>
                </Stack>
                <Stack direction='column' mt={3} sx={{mt:{sm:3,xs:14}}} >
                    <Stack sx={{p:{sm:10,xs:2}}} >
                        <Stack justifyContent='center' alignItems='center'>
                            <Stack sx={{p:{sm:5,xs:1}}}>
                                <Typography
                                    sx={{
                                        ml: '20px',
                                        fontFamily: 'Kelly Slab',
                                        fontSize: { sm: '30px', xs: '17px' },
                                        fontWeight: '700'
                                    }}>REGISTER</Typography>
                            </Stack>

                        </Stack>
                        <Stack direction='column' sx={{ padding:{sm: '0px 100px',xs: '0px 30px'} }} gap={2}>
                            <Stack display='flex' sx={{flexDirection:{sm:'row',sm:'column'}}}  gap={2}>
                                <Stack flex={6}>
                                    <TextField  onChange={(e) => setUsername(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
                                </Stack>
                                <Stack flex={6}>
                                    <TextField  onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
                                </Stack>
                            </Stack>
                            <Stack display='flex' sx={{flexDirection:{sm:'row',sm:'column'}}} gap={2}>
                                <Stack flex={6}>
                                    <TextField type='number' value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} id="outlined-basic" label="Mobile no" variant="outlined" />
                                </Stack>
                                <Stack flex={6}>
                                    <TextField value={semester} onChange={(e) => setSemester(e.target.value)} id="outlined-basic" label="Semester" variant="outlined" />
                                </Stack>
                            </Stack>
                            <Stack display='flex' sx={{flexDirection:{sm:'row',sm:'column'}}} gap={2}>
                                <Stack flex={6}>
                                    <TextField value={department} onChange={(e) => setDepartment(e.target.value)} id="outlined-basic" label="Department" variant="outlined" />
                                </Stack>
                                <Stack flex={6}>
                                    <TextField value={college} onChange={(e) => setCollege(e.target.value)} id="outlined-basic" label="College" variant="outlined" />
                                </Stack>
                            </Stack>
                            <Stack direction='row' gap={2}>
                                <Stack flex={12}>
                                    <Button variant="contained" onClick={createUser}>Register</Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>

            </Stack>
            <Connect/>
            <Footer />
        </Stack >
    )
}

export default Register