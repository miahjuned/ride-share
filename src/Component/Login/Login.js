import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, FormCheck, FormControl, FormGroup, FormText } from 'react-bootstrap';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookSquare,faGoogle, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { googleSignIn, initializeSignIn , facebookSignIn, githubSignIn} from '../FirebaseManager/FirebaseManager';
import { useHistory, useLocation } from 'react-router';
import { userContext } from '../../App';
import { Link } from 'react-router-dom';





const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    initializeSignIn();
    // Loging usign Google
    const [googleUser, setGoogleUser] = useState({});
    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        googleSignIn()
            .then(res => {
                setGoogleUser(res);
                setLoggedInUser(res);
                history.replace(from);
            })
    };
 
 
     // facebook login
    const [fbLogin, setFbLogin] = useState({});
    const handleFbSIgnIn =(e) =>{
        e.preventDefault();
         facebookSignIn()
            .then(res => {
                setFbLogin(res)
                setLoggedInUser(res);
                history.replace(from);
            })
    };
 
 
    // Github login
    const [githubLogin, setGithubLogin] =useState({});
     const handleGithubSIgnIn =(e) =>{
         e.preventDefault();
             githubSignIn()
             .then(res => {
                setGithubLogin(res)
                setLoggedInUser(res);
                history.replace(from);
             })
     };

    return (

        <Container className=" p-5">
            <Col md={{ span: 6, offset: 3 }} >
                <Form className="login_container p-5">

                    <FormGroup controlId="formBasicEmail">
                        <FormCheckLabel>Email: </FormCheckLabel>
                        <FormControl type="email" placeholder="name@example.com"></FormControl>
                        <FormText className="text-muted">We'll never share your email with anyone else.</FormText>
                    </FormGroup>

                    <FormGroup controlId="formBasicPassword">
                        <FormCheckLabel>Password: </FormCheckLabel>
                        <FormControl type="password" placeholder="Password"></FormControl>
                    </FormGroup>

                    <FormGroup controlId="formBasicCheckbox">
                        <FormCheck type="checkbox" label="Remembar me"/>
                    </FormGroup>

                    <Button variant="primary" type="submit" block>Login</Button>
                    <p >Don't have an account? <Link to="/createaccoun">Create an account</Link></p>
                </Form>

                <p>or</p>
                <Button variant="outline-info" onClick={handleGoogleSignIn} block><FontAwesomeIcon icon={faGoogle} /> continue with Google</Button>
                <Button variant="outline-info" onClick={handleFbSIgnIn} block><FontAwesomeIcon icon={faFacebookSquare} /> continue with Facebook</Button>
                <Button variant="outline-info" onClick={handleGithubSIgnIn} block><FontAwesomeIcon icon={faGithubSquare} /> continue with Github</Button>

            </Col>
        </Container>
    );
};
export default Login;