import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import "./login.css";

import useAuth from '../hooks/useAuth';

const LogIn = () => {
    const { signInUsingGoogle, setEmail, setPassword, error, logInwithPassAndEmail } = useAuth();
    const location = useLocation();

    const handeleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handelePasswordChange = e => {
        setPassword(e.target.value);

    }
    const handelLogin = e => {
        e.preventDefault();
        logInwithPassAndEmail();

    }
    return (

        <div>
            <Form className="LoginForm" onSubmit={handelLogin} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handeleEmailChange} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handelePasswordChange} type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>or log in with <Button onClick={signInUsingGoogle} >Google</Button> </p>
                <p>{error}</p>

                <p>New user? <Link to="/registration">Register</Link> now .</p>
            </Form>


        </div>
    );
};

export default LogIn;