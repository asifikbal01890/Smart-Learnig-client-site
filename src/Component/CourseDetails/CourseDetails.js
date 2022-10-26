import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();

    return (
        <div>
            <h1 className='fw-bolder pb-5'>Welcome To Course Details</h1>
            <div class="card mb-3">
                <img src={course.image} class="card-img-top border-bottom" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title fs-2 fw-bold text-color ">{course.name}</h5>
                    <p class="card-text">{course.details}</p>
                    <button className="btn-pink text-white fs-4 fw-semibold px-5 pb-2 rounded-5">Go To Premium</button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;