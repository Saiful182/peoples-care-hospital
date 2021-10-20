import './registration.css';

import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Registration = () => {
    const { setName, setEmail, setPassword, registration, password, error, setError } = useAuth()
    const handeleNameChange = e => {
        setName(e.target.value);
    }
    const handeleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handelePasswordChange = e => {
        setPassword(e.target.value);


    }
    const handleNewRegistration = e => {
        e.preventDefault();

        if (password.length < 6) {
            setError('Password Should be more then 6 charecter');
            return;
        }
        registration();

    }

    return (
        <div className="registration-area" >
            <form onClick={handleNewRegistration}>
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