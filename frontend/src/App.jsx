import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import '@mantine/charts/styles.css';
import { Box } from '@mantine/core';



const App = () => {
  return (
    <Box className='flex bg-blue-100  w-[100%] min-h-screen'>
      <Navbar />
      <Home />
      <Sidebar />
    </Box>
  )
}

export default App

