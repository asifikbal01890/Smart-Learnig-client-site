import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
   
    const {user, loading} = useContext(AuthContext);
    const location = useLocation ();

    if(loading){
        return <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
    }

    if(!user){
        return <Navigate to="/Login" state={{from: location}} replace></Navigate>
    }
    return children;

};

export default PrivateRoute;