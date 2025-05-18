import { Box } from '@mantine/core'
import React from 'react'
import MyCourseCard from './MyCourseCard'

const MyCourse = () => {
    return (
        <Box my={50}>
            <nav className='flex justify-between items-end'>
                <h1 className='text-2xl'>My courses</h1>
                <p className='text-md cursor-pointer'>All subjects <i className="fa-solid fa-angle-down ml-2"></i></p>
            </nav>

            <MyCourseCard title={'Tags in layout'} description={'10 lecture 5 pratical work'} imageUrl={"https://img.pikbest.com/origin/09/29/26/63bpIkbEsTzXy.png!sw800"} />
            <MyCourseCard title={'Chemistry is easy!'} description={'8 lecture 4 pratical work'} imageUrl={"https://pixcap.com/cdn/library/template/1729536570893/thumbnail/Atom_3D_Icon_transparent_400_emp.webp"} />
            <MyCourseCard title={'Economic Geography'} description={'8 lecture 4 pratical work'} imageUrl={"https://pixcap.com/cdn/library/template/1730735052411/thumbnail/Globe_Map_3D_Icon_transparent_800_emp.webp"} />
            <MyCourseCard title={'Maths in simple terms'} description={'24 lecture 10 pratical work'} imageUrl={"https://cdn3d.iconscout.com/3d/premium/thumb/chalk-board-3d-icon-download-in-png-blend-fbx-gltf-file-formats--blackboard-white-writing-easel-education-pack-school-icons-5487990.png"} />

        </Box>
    )
}

export default MyCourse