import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Login.css'

const Login = () => {
    const {singIn} = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        singIn(email, password)
        .then (result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error => console.error(error));
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
                <div>
                    or
                </div>
                <Link className='p-4' to={'/Register'}>Create New Account</Link>
        </div>
        </div>
    );
};

export default Login;