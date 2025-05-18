import React from 'react'
import TeacherAvatar from './TeacherAvatar'
import { Avatar, Box } from '@mantine/core'

const Teachers = () => {
    return (
        <Box mt={10}>
            <nav className='flex justify-between items-end'>
                <h1 className='text-2xl'>Your teachers</h1>
                <p className='text-md cursor-pointer'>See all <i className="fa-solid fa-angle-right"></i></p>
            </nav>

            <Box className=' mt-8 flex justify-between'>
                <TeacherAvatar name={'Anna Stewart'} imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKk6lXOWt_SqqYQIP0vbNG11cdgwdgIRUr9w&s"} />
                <TeacherAvatar name={"Volter Anderson"} imageUrl={'https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg'} />
                <TeacherAvatar name={"Alice Miller"} imageUrl={'https://img.freepik.com/premium-photo/blonde-lady-wearing-orange-suit-office-working-office_992976-29.jpg'} />
                <TeacherAvatar name={"Monica Peterson"} imageUrl={'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8zNV9iZWF1dGlmdWxfc21pbGluZ195b3VuZ19pbmRpYW5fYnVzaW5lc3Nfd29tYV8yYWM3MjMyNS1jZmU3LTQ5ODgtODBkNi03YjViZTg3ODYzNjNfMS5qcGc.jpg'} />
                <img className='md:h-16 md:w-16 lg:w-18 lg:h-18 w-12 h-12 rounded-full bg-white' src="https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png" alt="" />


            </Box>
        </Box>
    )
}

export default Teachers