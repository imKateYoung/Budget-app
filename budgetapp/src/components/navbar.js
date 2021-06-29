import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';

//once user is loggin, will show profile, dashboard and summary, and log out

function Navbar() {


    //if (!isNotAuthenticaed) return this,
    return (
        <div>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">💰Budget</NavLink>
                    <ul className="nav-menu">
                        <li className="nav-item"><NavLink exact to="/"  activeClassName="active" className="nav-links">Home</NavLink></li>
                        <li className="nav-item"><NavLink exact to="/signup" activeClassName="active" className="nav-links">Sign up</NavLink></li>
                        <li className="nav-item"><NavLink exact to="/login"  activeClassName="active" className="nav-links">Log in</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
        //else,
        // return (
        // if logged in/sign up show below nav links, else 
        //<li className = "nav-item" > <NavLink exact to="/dashboard" activeClassName="active" className="nav-links">Dashboard</NavLink></li >
        //<li className="nav-item"><NavLink exact to="/profile" activeClassName="active"  className="nav-links">Profile</NavLink></li>
        //<li className="nav-item"><NavLink exact to="/summary"  activeClassName="active" className="nav-links">Summary</NavLink></li>
        //<li className="nav-item"><NavLink exact to="/"  activeClassName="active" className="nav-links">Log out</NavLink></li>
       // )
}

export default Navbar;








