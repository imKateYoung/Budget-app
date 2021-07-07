import React,{useState,useEffect} from 'react';
import './login.css'
import { Link,Redirect,useHistory } from 'react-router-dom';

function Login() {
  
    const [userName, setuserName] = useState("");
    const [password,setPassword] = useState("");

    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('user-info'))
            history.push("/")
    }, [])

    function handleFormSubmit(e){
        e.preventDefault();
        // console.log(setuserName);
        // console.log(setPassword);
        // it is not showing, it could be after re-render, data is lost, no persistence.
    }

    async function login(){
        console.log(userName,password)
        Redirect('./profile')
        // let item = {userName,password};
        // let result = await fetch("http://localhost:3000/login",{
        //     method:'POST',
        //     headers:{
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify(item)
        // });
        // result = await result.json();
        // localStorage.setItem(JSON.stringify(result))
        // history.push("./profile")
    }

    return (
        <div>
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Log in</h1>
                    <form class={handleFormSubmit}>
                        <div className="userName">
                            <label htmlFor="userName">Username</label>
                            <input
                                placeholder="User Name"
                                type="text"
                                onChange={(e) => setuserName(e.target.value)}
                            />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                placeholder="Password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="loginAccount">
                            <button onClick={login}>Login</button>
                            <Link to="/signup"> Need an Account?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    );

}
export default Login;