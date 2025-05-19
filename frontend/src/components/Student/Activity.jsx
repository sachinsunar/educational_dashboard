import React from 'react'
import { BarChart } from '@mantine/charts';
import '@mantine/core/styles.css';
import { Box, MantineProvider, Text } from '@mantine/core';




const Activity = () => {
    const data = [
        { day: 'Mon', tasks: 1.3 },
        { day: 'Tue', tasks: 2.5 },
        { day: 'Wed', tasks: 2 },
        { day: 'Thu', tasks: 4 },
        { day: 'Fri', tasks: 2 },
        { day: 'Sat', tasks: 2.5 },
        { day: 'Sun', tasks: 2 },
    ];
    return (
        <Box className='mt-8'>
            <nav className='flex justify-between items-end'>
                <h1 className='text-2xl'>My activity</h1>
                <Text size='md' className='cursor-pointer'>See all <i className="fa-solid fa-angle-right"></i></Text>
            </nav>

            <Box className='flex flex-col  lg:flex-row justify-between'>
                <Box className='sm:mt-10 sm:mr-20 mt-10 w-full lg:w-[70%] '>
                    <MantineProvider withGlobalStyles withNormalizeCSS>
                        <BarChart
                            h={{ base: 150, md: 250, lg: 300 }}
                            data={data}
                            dataKey="day"
                            getBarColor={(value) => (value > 3 ? 'blue' : 'white')}
                            series={[{ name: 'tasks', color: 'white' }]}
                            barProps={{ radius: 10 }}
                            tickLine="none"
                            gridAxis="none"
                        />
                    </MantineProvider>
                </Box>

                <Box className='sm:mt-8 mt-4 xl:mx-8 mx-1  lg:w-[30%]   grid grid-cols-2 lg:grid-cols-1  justify-start sm:gap-6 gap-2'>
                    <Box className='sm:p-4 p-2 grid cols-span-1 border-1 border-white rounded-2xl shadow-xl'>
                        <Box className='flex justify-between'>
                            <p className='bg-white px-2 rounded-3xl md:text-[16px] lg:text-lg text-sm'>10:00</p>
                            <i className="fa-solid fa-square-check"></i>
                        </Box>
                        <Box className='mt-2'>
                            <p className='md:text-[16px] lg:text-lg text-sm'>Maths In <br /> Simple Terms</p>
                        </Box>
                    </Box>

                    <Box className='sm:p-4 p-2 grid cols-span-1 border-1 border-white bg-blue-50 rounded-2xl shadow-xl'>
                        <Box className='flex justify-between'>
                            <p className='bg-blue-500 text-white px-2 rounded-3xl md:text-[16px] lg:text-lg text-sm'>12:00</p>
                            <i className="fa-solid fa-pen"></i>
                        </Box>
                        <Box className='mt-2'>
                            <p className='md:text-[16px] lg:text-lg text-sm'>Chemistry <br /> Is Easy! </p>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Activity