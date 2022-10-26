import React from 'react';
import { FaFrown } from 'react-icons/fa';

const PageNotFound = () => {
    return (
        <div className='pt-5'>
            <span className='fs-1'><FaFrown></FaFrown></span>
            <h1> Page is not Available</h1>
        </div>
    );
};

export default PageNotFound;