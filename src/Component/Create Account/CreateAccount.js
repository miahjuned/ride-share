import React, { useContext, useState } from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { googleSignIn, initializeSignIn , facebookSignIn, githubSignIn} from '../FirebaseManager/FirebaseManager';
import './CreateAccount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookSquare,faGoogle, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';



const CreateAccount = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    
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

    <Container className="mb-5 pb-5">
        <Col md={{ span: 6, offset: 3 }}>
            <form className="create_account p-5  m-5 login_container" onSubmit={handleSubmit(onSubmit)}>
            <h2>Create an account</h2>
            <input name="name" ref={register({ required: true })} placeholder="Name" />
            {errors.name && <span className="error">Name is required</span>}

            <input name="email" ref={register({ required: true })} placeholder="Email"/>
            {errors.email && <span className="error">Email is required</span>}

            <input name="password" ref={register({ required: true })} placeholder="Password"/>
            {errors.password && <span className="error">Password is required</span>}

            <input name="number" ref={register({ required: true })} placeholder="Number" />
            {errors.number && <span className="error">Number is required</span>}
            
            <input type="submit" />
            <p >Have an account? <Link to="/login">Log in</Link></p>
            </form>
            <p>or</p>
            <Button variant="outline-info" onClick={handleGoogleSignIn} block><FontAwesomeIcon icon={faGoogle} /> continue with Google</Button>
            <Button variant="outline-info" onClick={handleFbSIgnIn} block><FontAwesomeIcon icon={faFacebookSquare} /> continue with Facebook</Button>
            <Button variant="outline-info" onClick={handleGithubSIgnIn} block><FontAwesomeIcon icon={faGithubSquare} /> continue with Github</Button>
        </Col>
    </Container>
  );
};

export default CreateAccount;