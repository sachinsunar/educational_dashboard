import { Box } from '@mantine/core'
import React from 'react'

const HomeMenu = () => {
    return (
        <Box className='flex items-center gap-1 md:gap-10 lg:gap-20' >
            <Box className='pr-1 md:pr-5 lg:pr-10   border-r-1 border-gray-400'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-3xl text-gray'>Home</h1>
                <p className='text-sm text-gray-700'>welcome back!</p>
            </Box>

            <Box className='flex flex items-start'>
                <i className="fa-solid fa-wallet  text-sm sm:text-xl lg:text-2xl py-1 px-2 sm:py-0 sm:px-0  sm:pr-4"></i>
                <Box>
                    <p className='text-sm sm:text-lg lg:text-lg'>$232</p>
                    <p className='text-gray-700 text-sm'>My Balance</p>
                </Box>
            </Box>

            <Box className='flex items-start '>
                <i className="fa-solid fa-folder-minus text-sm sm:text-xl lg:text-2xl py-1 px-2 sm:py-0 sm:px-0  sm:pr-4"></i>
                <Box>
                    <p className=' text-sm sm:text-lg lg:text-lg'>5 Lesson</p>
                    <p className='text-gray-700 text-sm'>Deposit</p>
                </Box>
            </Box>
        </Box>
    )
}

export default HomeMenu