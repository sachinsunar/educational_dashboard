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
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { backendUrl } from '../../App';
import axios from 'axios';
import toast from 'react-hot-toast';

const SignUp = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post(backendUrl + "/auth/signup", { name, email, password });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/login')
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <Container size={420} my={150}>
                <Title ta="center" fw={500} className=''>
                    Create an Account!
                </Title>

                <Text className='text-center mt-5'>
                    Already have an account? <Link to={'/login'} className='text-blue-400'>Login</Link>
                </Text>

                <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
                    <TextInput onChange={(e) => setName(e.target.value)} value={name} label="Name" placeholder="your name" required radius="md" />
                    <TextInput onChange={(e) => setEmail(e.target.value)} value={email} label="Email" placeholder="your@email.com" required radius="md" mt='md' />
                    <PasswordInput onChange={(e) => setPassword(e.target.value)} value={password} label="Password" placeholder="Your password" required mt="md" radius="md" />
                    <Group justify="space-between" mt="lg">
                        <Checkbox label="Remember me" />
                    </Group>
                    <Button type='submit' fullWidth mt="xl" radius="md">
                        Sign up
                    </Button>
                </Paper>
            </Container>
        </form>
    )
}

export default SignUp