import React from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const CourseDetails = () => {
    const course = useLoaderData();

    const ref = React.createRef();

    return (
        <div>
             <div className='d-flex justify-content-end'>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf} className="btn-pink text-white fs-3 fw-semibold px-5 pb-2 rounded-5"><FaArrowCircleDown></FaArrowCircleDown></button>}
                </Pdf>
             </div>
            <div ref={ref}>
              <h1 className='fw-bolder pb-5'>Welcome To Course Details</h1>
              <div class="card mb-3">
                <img src={course.image} class="card-img-top border-bottom" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title fs-2 fw-bold text-color">{course.name}</h5>
                    <p class="card-text">{course.details}</p>
                    <Link to={`/Courses/${course._id}/Premium`}><button className="btn-pink text-white fs-4 fw-semibold px-5 pb-2 rounded-5">Get Premium Access</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CourseDetails;