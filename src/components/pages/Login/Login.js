import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { LoginUser, setLoading } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        LoginUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    alert('Your email is not verified, please verify/email')
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => {
                setLoading(false)
            })

    }

    return (
        <div className='border shadow-lg bg-info'>
            <Form className='p-3' onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;