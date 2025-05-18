import React from 'react'
import sideimg from '../assets/img/sidebar.png'
import { DonutChart } from '@mantine/charts';
import '@mantine/core/styles.css';
import { Box, MantineProvider } from '@mantine/core';


const SidebarCards = () => {
    const data = [
        { name: 'English', value: 64, color: 'indigo.6' },
    ];
    return (
        <Box className='mt-10 flex flex-col gap-4'>
            <Box className='flex flex-col justify-evenly p-8  w-[100%]  rounded-4xl bg-cover  shadow-xl' style={{ backgroundImage: `url(${sideimg})` }}>
                <p className='text-white text-lg sm:text-xl font-medium'>Test your English level!</p>
                <p className='bg-gray-800  text-sm sm:text-md text-white py-2 px-3 font-medium rounded-4xl w-22'>Pass test</p>
            </Box>

            <Box className='flex  justify-between items-center sm:p-8 p-2 text-gray-700  w-[100%]   rounded-4xl bg-white  shadow-xl'>

                <Box className='flex flex-col sm:gap-4 gap-2'>
                    <Box>
                        <p className=' text-md font-medium'>English for travelling</p>
                        <p className=' font-light text-sm'>Start date: 04/05/2024</p>
                    </Box>
                    <p className='text-sm'>Tutor: Volter Anderson</p>
                </Box>

                <MantineProvider withGlobalStyles withNormalizeCSS>
                    <DonutChart data={data} w={10} h={10} size={60} thickness={12} startAngle={90} endAngle={320} strokeWidth={1} chartLabel="64%" />
                </MantineProvider>
            </Box>
        </Box>
    )
}

export default SidebarCards