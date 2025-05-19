import React from 'react'
import SearchBox from './SearchBox';
import MyCourse from './MyCourse';
import SidebarCards from './SidebarCards';
import { Box } from '@mantine/core';


const Sidebar = () => {

    return (
        <Box className='w-[25%] sm:ml-[75%] ml-0 fixed   mt-10 px-10 hidden xl:block  h-screen overflow-y-auto'>
            <SearchBox />
            <SidebarCards />
            <MyCourse />
        </Box>
    )
}

export default Sidebar