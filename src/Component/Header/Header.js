import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
   
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-orange">
              <div className="container-fluid">
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-white"></span>
                </button>
                <Link className="navbar-brand text-white pl-50" to={'/'}>
                    <div className='d-flex'>
                        <div>
                            <img className='w-10 rounded-circle' src="https://cdn.dribbble.com/users/1405795/screenshots/3979001/media/cac83e63d41f97b41160d01c2b5602c9.jpg?compress=1&resize=800x600&vertical=top" alt=""/>
                        </div>
                        <div className='ps-2 fw-bold fs-3'>
                            Smart Learning
                        </div>
                    </div>
                </Link>
                <button className='btn btn-light fw-bolder fs-5 d-lg-none'>Login</button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-50 m-auto">
                        <li className="nav-item">
                        <Link className="nav-link active text-white fs-5" aria-current="page" to={'/Courses'}>Courses</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-white fs-5" to={'/Blog'}>Blog</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-white fs-5" to={'/FAQ'}>FAQ</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-white fs-5" to={'/Blog'}>Blog</Link>
                        </li>
                    <button type="button" className="btn btn-outline-light fw-bolder w-25 mx-auto fs-5">Dark</button>
                    </ul>
                    <Link to={"/Register"}><button type="button" className="btn btn-outline-light fw-bolder fs-5">Register</button></Link>
                   
                </div>
                <Link to={"/Login"}><button className='btn btn-light me-50 fw-bolder fs-5 mx-3 d-none d-lg-block'>Login</button></Link>

              </div>
            </nav>
        </div>
    );
};

export default Header;