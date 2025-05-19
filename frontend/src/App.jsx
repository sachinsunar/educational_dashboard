import React, { useEffect, useState } from 'react'
import Navbar from './components/Student/Navbar'
import Home from './pages/Landing/Home'
import Sidebar from '././components/Student/Sidebar'
import '@mantine/charts/styles.css';
import { Box } from '@mantine/core';
import { Route, Routes } from 'react-router';
import { Layout } from './pages/Landing/Layout';
import Login from './components/Landing/Login';
import { Toaster } from 'react-hot-toast';
import StudentApp from './pages/Student/StudentApp';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {

  const [token, setToken] = useState('');


  useEffect(() => {
    const storedToken = localStorage.getItem('token') || '';
    setToken(storedToken);
  }, [token])


  return (
    <div>
      {token === "" ?
        <Box>
          <Toaster />
          <Layout />
        </Box> : <StudentApp />}
    </div>
  )
}

export default App

