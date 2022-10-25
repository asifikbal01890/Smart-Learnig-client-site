import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='w-50 mx-auto mt-5'>
            <form>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label fw-semibold fs-4">Full Name</label>
                    <div className="col-sm-10">
                    <input type="Name" className="form-control fs-4" id="inputEmail3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label fw-semibold fs-4">Photo Url</label>
                    <div className="col-sm-10">
                    <input type="photoUrl" className="form-control fs-4" id="inputEmail3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label fw-semibold fs-4">Email</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control fs-4" id="inputEmail3"/>
                    </div>
                </div>
                <div className="row mb-3 ">
                    <label for="inputPassword3" className="col-sm-2 col-form-label fw-semibold fs-4">Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control fs-4" id="inputPassword3"/>
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