import { Box, Text } from '@mantine/core'
import React from 'react'

const MyCourseCard = ({ imageUrl, title, description }) => {
    return (
        <Box className='mt-6 flex justify-between items-center border-b-2 border-gray-300 p-4'>
            <Box className='flex gap-2 items-center'>
                <img className='w-15 bg-white rounded-full p-2' src={imageUrl} alt="" />
                <Box>
                    <Text size='lg'>{title}</Text>
                    <Text size='sm' c="dimmed">{description}</Text>
                </Box>
            </Box>
            <i className="fa-solid fa-play text-xl text-gray-800"></i>
        </Box>
    )
}

export default MyCourseCard