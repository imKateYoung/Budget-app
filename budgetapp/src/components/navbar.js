import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';



function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">💰Budget</NavLink>
                    <ul className="nav-menu">
                        <li className="nav-item"><NavLink exact to="/"  activeClassName="active" className="nav-links">Home</NavLink></li>
                        <li className="nav-item"><NavLink exact to="/signup" activeClassName="active" className="nav-links">Sign up</NavLink></li>
                        <li className="nav-item"><NavLink exact to="/login"  activeClassName="active" className="nav-links">Log in</NavLink></li>
                        <li className="nav-item"><NavLink exact to="/dashboard"  activeClassName="active" className="nav-links">Dashboard</NavLink></li>
                        <li className="nav-item"><NavLink exact to="/profile" activeClassName="active"  className="nav-links">Profile</NavLink></li>
                        <li className="nav-item"><NavLink exact to="/summary"  activeClassName="active" className="nav-links">Summary</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar








