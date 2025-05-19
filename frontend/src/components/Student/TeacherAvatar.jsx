import { Box } from '@mantine/core'

const TeacherAvatar = ({ name, imageUrl }) => {
    return (
        <Box className='flex flex-col justify-center items-center'>
            <img className='lg:w-18 lg:h-18 w-12 h-12 md:w-14 md:h-14 rounded-full' src={imageUrl} alt="" />
            <p className='text-center  sm:-mt-4 -mt-3'> <i className="fa-solid fa-comment bg-black rounded-full sm:p-2 p-[6px] text-white text-[10px] md:text-lg"></i></p>
            <p className='text-sm md:text-[16px] lg:text-lg mt-2 leading-none text-center'>{name}</p>
        </Box>

    )
}

export default TeacherAvatar