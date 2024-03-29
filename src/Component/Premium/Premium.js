import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {

    const course = useLoaderData();

    return (
        <div className='pt-5'>
            <h1 className='fw-bold text-color'>Most Welcome To Our <span className='text-pink'>{course.name}</span> Premium</h1>
            <p className='pt-4 fs-5'><strong>YES.</strong> You can do it.</p>
            <h4 className='pt-3 fw-bolder text-pink'>Go Ahead</h4>
        </div>
    );
};

export default Premium;