import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)


    const handleSignInUser = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Password must be 6 character')
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset('')
                handleUpdateProfile(name, photoURL);
                handleEmailVerification();
            })
            .catch(error => console.error(error))
    }
    //terms and condition
    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(result => {
                const user = result.user;
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='border shadow-lg bg-info'>
            <Form className='p-3' onSubmit={handleSignInUser}>
                <Form.Text className="text-danger fs-2">
                    {error}
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> <span className='text-light'>Name</span> </Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> <span className='text-light'>photoURL</span> </Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Enter your photoURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> <span className='text-light'>Email address</span> </Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> <span className='text-light'>Password</span> </Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox"
                        label={<> Accept <Link to='/terms'>Terms and condition</Link></>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;