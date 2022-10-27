import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const {createUser, updateUserProfile} = useContext(AuthContext)

    const handleSubmit = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.PhotoURL.value;
        const email = form.email.value;
        const password = form.Password.value;

        createUser(email, password)
         .then(result=>{
            const user =result.user;
            // console.log(user);
            setError('');
            form.reset();
            handleUpdateUserProfile(name, photoURL);
         })
         .catch(e=> {
            
            setError(e.message);
         });
    }

     const handleUpdateUserProfile = (name, photoURL) =>{
        const profile ={
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(e => {
            setError(e.message)
        });
     }

    return (
        <div>
            <div className='w-150 mx-auto bg-light shadow p-3 mb-5 bg-body rounded mt-5'>
                <div>
                    <h2>Create Your New Account</h2>
                </div>
            <form onSubmit={handleSubmit} className='pt-4'>
                <div className="row mb-3">

                    <div className="col-sm-10  w-100">
                    <input type="Name" className="form-control fs-5" name="name" placeholder='Full name'/>
                    </div>
                </div>
                <div className="row mb-3">

                    <div className="col-sm-10 w-100">
                    <input type="PhotoURL" className="form-control fs-5" name="PhotoURL" placeholder='Photo URL'/>
                    </div>
                </div>
                <div className="row mb-3">

                    <div className="col-sm-10 w-100">
                    <input type="email" className="form-control fs-5" name="email" placeholder='Email address' required/>
                    </div>
                </div>
                <div className="row mb-3 ">

                    <div className="col-sm-10 w-100">
                    <input type="Password" className="form-control fs-5" name="Password" placeholder='Password' required/>
                    </div>
                </div>
                <button type="submit" className="btn-pink text-white fs-4 fw-semibold px-5 pb-2 rounded-5">Register</button>
                </form>
                <span className='text-danger'>{error}</span>
                <div>
                    or
                </div>
                <p>If you already have e Account, then <Link to={'/Login'}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;