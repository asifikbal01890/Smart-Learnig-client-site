import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftNav from '../LeftNav/LeftNav';

const Courses = () => {
    return (
        <div className='container text-center'>
            <div class="row">
                <div class="col-md-3 bg-light shadow p-3 mb-5 bg-body rounded"><LeftNav></LeftNav></div>
                <div class="col-md-9 ps-5 pt-5"><Outlet></Outlet></div>
            </div>
        </div>
    );
};

export default Courses;