import { Box } from "@mantine/core"
import Navbar from "../../components/Student/Navbar"
import Sidebar from "../../components/Student/Sidebar"
import Home from "./Home"

const StudentApp = () => {
    return (
        <Box className='flex bg-blue-100  w-[100%] min-h-screen'>
            <Navbar />
            <Home />
            <Sidebar />
        </Box>
    )
}

export default StudentApp