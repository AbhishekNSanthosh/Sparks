import { Divider, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { motion } from 'framer-motion'
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
import GamepadIcon from '@mui/icons-material/Gamepad';

const Faqs = () => {
    const [showDrop, setShowDrop] = useState(null)
    const [showDropArrow, setShowDropArrow] = useState(false)

    const faqs = [
        { id: 1, que: "  What are the prerequisites for Sparkz 23?", ans: "All students with a valid college ID can enter to the fest for free." },
        { id: 2, que: "Is there any chance of getting Activity point for participating in an event?", ans: "Activity Points is given according to regulations and norms under KTU, However the points varies depending upon the type of event (Technical / Non-technical )which the candidate is participating." }
    ]

    return (
        <>

            {faqs && faqs.map((faq, index) => (
                <Stack direction='column' key={index} height='auto' gap={1}>
                    <Stack width='100%' justifyContent='space-between' direction='row'>

                        <Stack mt={1}>

                            <Typography sx={{
                                fontFamily: 'Kelly Slab',
                                fontSize: { sm: '17px', xs: '13px' },
                                fontWeight: '700',
                                color: '#a3a3a0'

                            }} >
                                {faq?.que}
                            </Typography>
                        </Stack>
                        <Stack>
                            <IconButton onClick={() => { setShowDrop(index); setShowDropArrow(!showDropArrow) }}>
                                <WifiProtectedSetupIcon sx={{ fontSize: { xs: '15px', sm: '30px' } }} />
                            </IconButton>
                        </Stack>

                    </Stack>
                    {showDropArrow &&
                        <>
                            {showDrop === index &&
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <Stack width='100%' direction='row' gap={1} justifyContent='start' alignItems='center'>
                                        <GamepadIcon sx={{fontSize:'17px'}}/>
                                        <Typography sx={{
                                            fontFamily: 'Kelly Slab',
                                            fontSize: { sm: '17px', xs: '13px' },
                                            fontWeight: '700',
                                            color: '#a3a3a0'

                                        }} >
                                            {faq?.ans}
                                        </Typography>
                                    </Stack>
                                </motion.div>
                            }
                        </>
                    }
                    <Divider />
                </Stack>
            ))}
        </>
    )
}

export default Faqs