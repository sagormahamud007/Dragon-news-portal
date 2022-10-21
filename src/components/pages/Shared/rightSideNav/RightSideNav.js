import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarosel/BrandCarousel';


const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            }
            )
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className="mb-2" variant="outline-primary"> <FaGoogle></FaGoogle> Login with google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Login with github</Button>
                <div className='mt-3'>
                    <h5>Find us to</h5>
                    <ListGroup>
                        <ListGroup.Item className='mb-2'> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                        <ListGroup.Item className='mb-2'> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaGithub></FaGithub> Github</ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaYoutube></FaYoutube> You-tube</ListGroup.Item>
                        <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </div>
            </ButtonGroup>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;