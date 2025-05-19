import {
    Anchor,
    Button,
    Checkbox,
    Container,
    Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { backendUrl } from '../../App';
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")
    const navigate = useNavigate();


    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post(backendUrl + "/auth/login", { email, password });
            console.log(res.data);
            if (res.data.success) {
                toast.success(res.data.message);
                setToken(res.data.accessToken);
                localStorage.setItem('token', res.data.accessToken);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
        if (token) {
            navigate('/dashboard')
        }
    }, [token])

    return (
        <form onSubmit={onSubmitHandler}>
            <Container size={420} my={150}>
                <Title ta="center" fw={500} className=''>
                    Welcome back!
                </Title>

                <Text className='text-center mt-5'>
                    Do not have an account yet? <Link to={'/signup'} className='text-blue-400'> Create account</Link>
                </Text>

                <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
                    <TextInput onChange={(e) => setEmail(e.target.value)} value={email} label="Email" placeholder="your@email.com" required radius="md" />
                    <PasswordInput onChange={(e) => setPassword(e.target.value)} value={password} label="Password" placeholder="Your password" required mt="md" radius="md" />
                    <Group justify="space-between" mt="lg">
                        <Checkbox label="Remember me" />
                        <Anchor component="button" size="sm">
                            Forgot password?
                        </Anchor>
                    </Group>
                    <Button type='submit' fullWidth mt="xl" radius="md">
                        Login
                    </Button>
                </Paper>
            </Container>
        </form>
    )
}

export default Login