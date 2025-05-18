import React, { useState } from 'react'
import Activity from '../components/Activity'
import Teachers from '../components/Teachers'
import Courses from '../components/Courses'
import HomeMenu from '../components/HomeMenu'
import { Box } from '@mantine/core'

const Home = () => {




    return (


        <Box className='w-[85%] xl:w-[57%] md:w-[80%] xl:ml-[18%] md:ml-[30%] lg:ml-[27%] ml-[15%]  my-4 sm:my-10 px-2 md:px-10 xl:px-20 border-x-2 border-gray-300 '>
            <HomeMenu />
            <Activity />
            <Teachers />
            <Courses />

        </Box >
    )
}

export default Home