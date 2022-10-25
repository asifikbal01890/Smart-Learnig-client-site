import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='w-150 mx-auto bg-light shadow p-3 mb-5 bg-body rounded mt-5'>
            <form>
                <div className="row mb-3">

                    <div className="col-sm-10  w-100">
                    <input type="Name" className="form-control fs-4" id="inputEmail3" placeholder='Full name'/>
                    </div>
                </div>
                <div className="row mb-3">

                    <div className="col-sm-10 w-100">
                    <input type="photoUrl" className="form-control fs-4" id="inputEmail3" placeholder='Photo URL'/>
                    </div>
                </div>
                <div className="row mb-3">

                    <div className="col-sm-10 w-100">
                    <input type="email" className="form-control fs-4" id="inputEmail3" placeholder='Email address'/>
                    </div>
                </div>
                <div className="row mb-3 ">

                    <div className="col-sm-10 w-100">
                    <input type="password" className="form-control fs-4" id="inputPassword3" placeholder='Password'/>
                    </div>
                </div>
                <button type="submit" className="btn-pink text-white fs-4 fw-semibold px-5 pb-2 rounded-5">Login</button>
                </form>
                <div>
                    or
                </div>
                <p>If you already have e Account, then <Link to={'/Login'}>Login</Link></p>
        </div>
        </div>
    );
};

export default Register;