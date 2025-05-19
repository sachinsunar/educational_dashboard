import { Badge, Box, Card, Image, Text } from '@mantine/core'
import React from 'react'

const CourseCard = ({ tilte, category, imageUrl }) => {
    return (
        <Box>
            <Card radius="lg" className='!p-0 lg:!h-30'>
                <Card.Section>
                    <Image src={imageUrl} height={180} />
                </Card.Section>

                <Badge unstyled className='absolute top-2 left-2 bg-white text-black rounded-full px-2 '>
                    {category}
                </Badge>
            </Card>
            <p className='text-sm md:text-[16px] lg:text-lg mt-2'>{tilte}</p>
        </Box>
    )
}

export default CourseCard