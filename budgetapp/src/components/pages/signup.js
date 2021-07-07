import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
//import { Redirect } from 'react-router-dom';



function Signup() {

    

    const handleFormSubmit = (e) =>{
        e.preventDefault();
    }

    return (
        <div>
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Create Account</h1>
                    <form onSubmit={handleFormSubmit}>
                        <div className="userName">
                            <label htmlFor="userName">Username</label>
                            <input className="input"
                                placeholder="User Name"                                
                            /> 
                        </div>                        
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input className="input"                             
                                placeholder="Password"                                

                            />                           
                        </div>
                        <div className="createAccount">
                            <button type="submit" >Create Account</button>
                            <Link to="/login"> Already Have an Account?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    );
}

export default Signup;

// <button onClick={switchToLogin} ><small> Already Have an Account?</small></button>
// <Link to="/login" />Click to login</Link>