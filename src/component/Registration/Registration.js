import './registration.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const auth = getAuth();

const Registration = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');



    const handeleNameChange = e => {
        setName(e.target.value);
    }

    const handeleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handelePasswordChange = e => {
        setPassword(e.target.value);

    }
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Should be more then 6 charecter');
            return;
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const user = result.user;
                setError('');
                setUserName();
                console.log(user);

            }).catch((error) => {
                const errorMessage = error.message
                setError(errorMessage);


            });

    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => {

                setError('');
            }).catch((error) => {
                setError(error);
            }


            )
    }
    return (
        <div className="registration-area" >
            <form onClick={handleRegistration}>
                <div className="mb-3">
                    <label className="form-label">Type Your Name</label>
                    <input onBlur={handeleNameChange} type="text" className="form-control" id="type Your name" required />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={handeleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={handelePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <p>{error}</p>
                <p>Already Registered? <Link to="/login">LogIn</Link> now .</p>
            </form>

        </div >

    );
};

export default Registration;