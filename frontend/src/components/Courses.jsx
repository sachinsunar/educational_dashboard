import React from 'react'
import course1 from '../assets/img/course1.png'
import course2 from '../assets/img/course2.png'
import course3 from '../assets/img/course3.png'
import CourseCard from './CourseCard'
import { Box } from '@mantine/core'

const Courses = () => {
    return (
        <Box className='sm:mt-10 mt-8'>
            <nav className='flex justify-between items-end'>
                <h1 className='text-2xl'>Popular courses </h1>
                <p className='text-md  flex gap-10'>
                    <i className="fa-solid fa-angle-left cursor-pointer"></i>
                    <i className="fa-solid fa-angle-right cursor-pointer"></i>
                </p>
            </nav>

            <Box className='grid sm:grid-cols-3 grid-cols-2 sm:gap-12 gap-2 justify-between mt-7'>
                <CourseCard imageUrl={course1} tilte={"German Grammer and Vocabulary"} category={'Languages'} />
                <CourseCard imageUrl={course2} tilte={"Logic and Problem Solving"} category={'Maths'} />
                <CourseCard imageUrl={course3} tilte={"Chemistry and the Environment"} category={'Chemistry'} />
            </Box>


        </Box>
    )
}

export default Courses