import { Stack, Typography } from '@mui/material'
import React from 'react'

const Dep = ({user}) => {
    return (
        <Stack p={2} direction='row' gap={3}>
            <Stack>
                <Typography
                    fontSize='25px'
                    fontFamily='killi sla'
                >DepartMent :</Typography>
            </Stack>
            <Stack>
                {/* {user && user.map((item,index)=>( */}
                    <Typography
                    fontSize='25px'
                    fontFamily='killi sla'
                    >{user.adminDep}</Typography>
                    {/* ))} */}
            </Stack>
        </Stack>
    )
}

export default Dep