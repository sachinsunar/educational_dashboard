import { AppShell, Box, Burger, Group, Text, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Home from './Home';
import { NavLink, Route, Routes } from 'react-router';
import Login from '../../components/Landing/Login';
import SignUp from '../../components/Landing/SignUp';



export function Layout() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Group justify="space-between" style={{ flex: 1 }}>
                        <Box className='flex gap-2'>
                            <i className="fa-brands fa-slack text-3xl "></i>
                            <Text size='xl' fw={700}>Knowledge</Text>
                        </Box>
                        <Group ml="xl" gap={0} visibleFrom="sm" unstyled className="flex gap-10 items-center">
                            <NavLink to={'/'}>
                                <UnstyledButton >Home</UnstyledButton>
                            </NavLink>
                            <UnstyledButton >About us</UnstyledButton>
                            <UnstyledButton >Blog</UnstyledButton>
                            <UnstyledButton >Contacts</UnstyledButton>
                            <UnstyledButton >Support</UnstyledButton>
                            <NavLink to={'/login'}>
                                <UnstyledButton unstyled className='bg-gray-400 text-white rounded p-2 cursor-pointer' >Login</UnstyledButton>
                            </NavLink>
                        </Group>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4} unstyled className='gap-5'>
                <UnstyledButton >Home</UnstyledButton>
                <UnstyledButton >Blog</UnstyledButton>
                <UnstyledButton >Contacts</UnstyledButton>
                <UnstyledButton >Support</UnstyledButton>
                <UnstyledButton unstyled className='bg-gray-300 text-white rounded p-1' >Login</UnstyledButton>
            </AppShell.Navbar>

            <AppShell.Main>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </AppShell.Main>
        </AppShell>
    );
}