import React,{useState,useEffect} from 'react';
import './login.css'
import { Link,useHistory } from 'react-router-dom';

function Login() {
  
    const [userName, setuserName] = useState();
    const [password,setPassword] = useState();

    function handleFormSubmit(e){
        e.preventDefault();
        // console.log(setuserName);
        // console.log(setPassword);
        // it is not showing, it could be after re-render, data is lost, no persistence.
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
                                onChange= { e => setuserName(e.target.value)}
                            />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                placeholder="Password"
                                type="password"
                                name="password"
                                onChange = { e => setPassword(e.target.value)}
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