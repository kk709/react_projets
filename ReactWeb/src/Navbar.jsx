import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return(
        <>
            <div className='container-fluid nav_bg'>
                <div className='row justify-content-center'>
                    <div className='col-10 max-auto'>

            
            <nav className="navbar navbar-expand-lg navbar-white bg-white">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">TechnicalSupport</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink exact activeClassName='menu-active' className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName='menu-active' className="nav-link" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName='menu-active' className="nav-link" to="/services">Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName='menu-active' className="nav-link" to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                </div>
            </nav>
            </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;