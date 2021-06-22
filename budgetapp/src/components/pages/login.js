import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';


function Login() {
    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Log in</h1>
                    <form >
                        <div className="userName">
                            <label htmlFor="userName">Username</label>
                            <input
                                placeholder="User Name"
                                type="text"
                                name="userName"

                            />

                        </div>

                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                placeholder="Password"
                                type="password"
                                name="password"
                            />

                        </div>
                        <div className="loginAccount">
                            <button type="submit" className={handleFormSubmit}>Login</button>
                            <Link to="/signup"> Need an Account?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    );

}
export default Login;