import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css'

const LeftNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/course')
        .then( res => res.json())
        .then( data => setCourses(data));
    }, [])

    return (
        <div>
            <h3 className='fw-bold text-pink pb-4 border border-bottom'>All Course</h3>
            {
                courses.map( course => <p key={course._id}>
                    <Link to={`/Courses/${course._id}`} className='text-decoration-none btn btn-outline-primary text-black d-block w-100'>{course.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;