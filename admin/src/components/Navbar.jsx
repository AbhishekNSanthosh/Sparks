import { Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Cookies from 'js-cookie';

const Navbar = () => {

    const handleLogout = () => {
        Cookies.remove('auth_token')
        window.location.reload()
    }

    return (
        <Stack>
            <Stack p={3} justifyContent='space-between' direction='row'>
                <Stack ml={5}>
                    <Typography
                        fontSize='25px'
                        fontFamily='killi sla'
                    >SPARKZ '23 Dashboard</Typography>
                </Stack>
                <Stack mr={5} alignItems='center' justifyContent='center' direction='row' gap={2}>
                    <Button onClick={handleLogout}>Logout</Button>
                 <AccountCircleIcon/>
                </Stack>
            </Stack>
            <Divider />
        </Stack>
    )
}

export default Navbar