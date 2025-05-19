import { Avatar, Box, Group, Text } from '@mantine/core'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();


    const logout = () => {
        localStorage.removeItem('token');
        navigate("/login")
    };

    return (
        <Box className='fixed w-[15%] md:w-[30%] lg:w-[27%] xl:w-[18%]    flex flex-col gap-10   text-black  min-h-[91.5vh]  py-4  sm:my-10 sm:px-5  lg:px-10 px-2 sm:justify-between sm:items-start items-center  ' >
            <Box className='flex  lg:text-3xl md:text-xl sm:text-lg font-bold'>
                <i className="fa-brands fa-slack text-3xl"></i>
                <p className='hidden md:block '>Knowledge</p>
            </Box>
            <nav className='flex flex-col gap-4 text-xl font-light sm:pb-10 sm:mb-30 ' >

                <NavLink to='/dashboard' className='flex items-center px-3 py-2' >
                    <i className="fa-solid fa-house sm:pr-3"></i>
                    <p className='text-[18px] xl:text-xl hidden md:block'>Home</p>
                </NavLink>

                <NavLink to='/all-courses' className='flex items-center px-3 py-2 ' >
                    <i className="fa-solid fa-border-all sm:pr-3"></i>
                    <p className='text-[18px] xl:text-xl hidden md:block'>All Courses</p>
                </NavLink>

                <NavLink to='/popular-courses' className='flex items-center px-3 py-2' >
                    <i className="fa-solid fa-star sm:pr-3"></i>
                    <p className='text-[18px] xl:text-xl hidden md:block'>Popular Courses</p>
                </NavLink>

                <NavLink to='/schedule' className='flex items-center px-3 py-2' >
                    <i className="fa-solid fa-calendar-days sm:pr-3"></i>
                    <p className='text-[18px] xl:text-xl hidden md:block'>Schedule</p>
                </NavLink>

                <NavLink to='/mycourses' className='flex items-center px-3 py-2' >
                    <i className="fa-solid fa-file sm:pr-3"></i>
                    <p className='text-[18px] xl:text-xl hidden md:block'>My Courses </p>

                </NavLink>

                <NavLink to='/statistics' className='flex items-center px-3 py-2'>
                    <i className="fa-solid fa-square-poll-vertical sm:pr-3"></i>
                    <p className='text-[18px] lg:text-xl hidden md:block'>Statistics</p>
                </NavLink>


            </nav>
            <Box className='flex flex-col items-center sm:items-start'>
                <Box className='flex sm:gap-4 border-b-2 border-gray-300 p-2'>

                    <Group>
                        <Avatar
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                            radius="xl"
                            className='flex !items-center cursor-pointer'
                        />

                        <Box>
                            <Text size="lg" fw={700} className='hidden md:block cursor-pointer'>
                                Sachin Sunar
                            </Text>
                            <Text c="dimmed" size="sm" className='hidden md:block cursor-pointer'>
                                Premium plan
                            </Text>
                        </Box>

                    </Group>
                </Box>

                <Box onClick={logout} className='flex items-center mt-2 sm:pl-4'>
                    <i className="fa-solid fa-right-from-bracket sm:pr-4 text-2xl cursor-pointer"></i>
                    <p className='text-[18px] lg:text-xl font-semibold hidden md:block cursor-pointer'>Logout</p>
                </Box>
            </Box>
        </Box >
    )
}

export default Navbar