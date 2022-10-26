import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/course')
        .then( res => res.json())
        .then( data => setCourses(data));
    }, [])

    return (
        <div>
            <h3>All Course</h3>
            {
                courses.map( course => <p key={course._id} className="btn btn-outline-primary text-black d-block">
                    <Link to={`/course/${course._id}`}>{course.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;