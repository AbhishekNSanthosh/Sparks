import { IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { motion } from 'framer-motion'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Faqs = () => {
    const [showDrop, setShowDrop] = useState(false)
    return (
        <Stack direction='column' >
            <Stack width='100%' justifyContent='space-between' direction='row'>
                <Stack mt={1}>

                    <Typography sx={{
                        fontFamily: 'Kelly Slab',
                        fontSize: { sm: '17px', xs: '13px' },
                        fontWeight: '700',
                        color: '#a3a3a0'

                    }} >
                        What are the prerequisites for Sparkz 23?
                    </Typography>
                </Stack>
                <Stack>
                    { !showDrop ? 
                    <IconButton onClick={() => setShowDrop(true)}>
                        <ArrowDropDownIcon sx={{ fontSize: {xs:'15px',sm:'30px'} }} />
                    </IconButton>
                    :
                    <IconButton onClick={() => setShowDrop(false)}>
                        <ArrowDropUpIcon sx={{ fontSize: {xs:'15px',sm:'30px'} }} />
                    </IconButton>
                    }
                </Stack>
            </Stack>
            {showDrop &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Stack width='100%' direction='row'>
                        <Typography sx={{
                            fontFamily: 'Kelly Slab',
                            fontSize: { sm: '21px', xs: '15px' },
                            fontWeight: '700',
                            color: '#a3a3a0'

                        }} >
                            All students with a valid college ID can enter to the fest for free.
                        </Typography>
                    </Stack>
                </motion.div>
            }
        </Stack>
    )
}

export default Faqs