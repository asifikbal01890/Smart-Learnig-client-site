import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Login.css';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';


const Login = () => {
    const [error, setError] = useState('');
    const {signIn, googleSingIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace: true});
           
        })
        .catch(e => setError(e.message));
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSingIn = () => {
        googleSingIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(e => setError(e.message))
    }

    return (
        <div className='my-5'>
            <div className='w-150 mx-auto bg-light shadow p-3 mb-5 bg-body rounded'>
                <div>
                    <h2>Please Login</h2>
                </div>
            <form onSubmit={handleSubmit} className='pt-4'>
                <div className="row mb-3 mt">
                    <div className="col-sm-10 w-100">
                    <input type="email" className="form-control fs-5" name="email" placeholder='Email address' required/>
                    </div>
                </div>
                <div className="row mb-3 ">
                    <div className="col-sm-10 w-100">
                    <input type="password" className="form-control fs-5" name="password" placeholder='Password' required/>
                    </div>
                </div>
                <button type="submit" className="btn-pink text-white fs-4 fw-semibold px-5 pb-2 rounded-5">Login</button>
                </form>
                <span className='text-danger'>{error}</span>
                <div>
                    or
                </div>
                <Link className='p-4' to={'/Register'}>Create New Account</Link>
                <div className='d-block pt-3'>
                    <div>
                        <button onClick={handleGoogleSingIn} type="button" className="btn btn-outline-success w-50"><FaGoogle></FaGoogle> Sing In by Google</button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-secondary mt-3 w-50"><FaGithub></FaGithub>  Sing In by Github</button>
                    </div>
                </div>

        </div>
        </div>
    );
};

export default Login;