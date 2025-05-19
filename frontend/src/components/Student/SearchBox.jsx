import { Box, Input } from '@mantine/core'
import React from 'react'
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"


const SearchBox = () => {
    return (
        <Box className='flex  gap-4 items-center '>
            <Input
                className='border-b-2 border-gray-300 w-full'
                variant='unstyled'
                leftSection={<MagnifyingGlassIcon />}
                placeholder='Search'
            />
            <i className="fa-solid fa-comment text-lg sm:text-2xl"></i>
            <i className="fa-solid fa-bell text-lg sm:text-2xl"></i>
        </Box>
    )
}

export default SearchBox