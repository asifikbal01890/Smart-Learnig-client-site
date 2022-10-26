import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Course = () => {
    const displayCourses = useLoaderData();
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {
                displayCourses.map( displayCourse =>
                <CourseCard 
                key={displayCourse._id}
                displayCourse={displayCourse}
                ></CourseCard>)
            }
        </div>
    );
};

export default Course;