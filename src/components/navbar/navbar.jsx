import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/" id="navbar">Joseph Strickland</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span><span><i className="fas fa-bars fa-1x"></i></span></button>


                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

                        <li className="nav-item active">
                        <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>

    )
}

export default Navbar
