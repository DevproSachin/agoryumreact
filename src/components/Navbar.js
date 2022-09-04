import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import Modalform from './Modalform';
function Navbar() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="index.html"><img src={logo} alt="" height="40" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active text-uppercase " aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-uppercase " aria-current="page" to="/about">About us</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link  text-uppercase " to="/" id="navbarDropdown" role="button" aria-expanded="false">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-uppercase " aria-current="page" to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <button className="ai-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"> Let's Talk </button>
                                {/* Modal */}
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Send your Queries</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                  <Modalform/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
