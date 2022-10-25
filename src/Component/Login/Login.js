import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='my-5'>
            <div className='w-150 mx-auto bg-light shadow p-3 mb-5 bg-body rounded'>
                <div>
                    <h2>Please Login</h2>
                </div>
            <form className='pt-4'>
                <div className="row mb-3 mt">
                    <div className="col-sm-10 w-100">
                    <input type="email" className="form-control fs-4 " id="inputEmail3" placeholder="Email address"/>
                    </div>
                </div>
                <div className="row mb-3 ">
                    <div className="col-sm-10 w-100">
                    <input type="password" className="form-control fs-4" id="inputPassword3" placeholder="Password"/>
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