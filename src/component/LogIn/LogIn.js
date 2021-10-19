import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import "./login.css"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {
    const { signInUsingGoogle } = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');



    const handeleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handelePasswordChange = e => {
        setPassword(e.target.value);

    }

    const handelLogin = e => {
        e.preventDefault();
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const user = result.user;

                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });



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
                <p>or log in with <Button onClick={signInUsingGoogle}>Google</Button> </p>
                <p>{error}</p>

                <p>New user? <Link to="/registration">Register</Link> now .</p>
            </Form>


        </div>
    );
};

export default LogIn;