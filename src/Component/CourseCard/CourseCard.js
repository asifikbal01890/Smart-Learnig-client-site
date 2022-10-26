import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css'

const CourseCard = ({displayCourse}) => {
    const {_id, name, details, image} = displayCourse;
    return (
        <div className="col border-0">
            <div className="card h-100">
                <img src={image} className="m-2 border rounded-3" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title fs-3 fw-bold text-color">{name}</h5>
                        <p className="card-text">
                           
                              
                            {details.slice(0,50)}...
                            
                        </p>
                        <Link to={`/Courses/${_id}`}><button className='btn-pink text-white fs-5 fw-semibold px-5 pb-1 py-1 rounded-5'>See Details</button></Link>
                </div>
            </div>
         </div>
           
    );
};

export default CourseCard;