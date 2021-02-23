import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import SNL from "./Images/SNStorelogo.png";
import sample from "./Images/Videosigninbg.mp4"
import MobileVideo from "./Images/mobilevideo.mp4";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (

        <>
        <div className="container-fluid login">

                         <video className='videoTag' autoPlay loop muted
                                style={{
                                    position: "fixed",
                                    objectFit: "cover",
                                    width: "100%",
                                objectFit: "cover",
                                transform: "translate(-50%,-50%)",
                                    zIndex: " -1",
                                    left: "50%",
                                    top: "50%"
                            
                        }}>
                            <source src={sample} type='video/mp4' />
                        </video>
                                <Link to="./"> <img className="login_logo" src={SNL} alt="Login Image" /> </Link>

         <div className="login_container">

                                            <h1 className="SignIn-font">Sign-In</h1>
                                            <form>
                                            <h5 className="emailPasswordFont">E-mail</h5>
                                            <input className="placeholder-font" type="text" placeholder="Email" value={email} onChange=
                                            {e => setEmail(e.target.value)}/>
                                            <h5 className="emailPasswordFont">Password</h5>
                                            <input className="placeholder-font" type="password" placeholder="Password"  value={password} onChange=
                                            {e => setPassword(e.target.value)} />
                                            <button type="submit" onClick={signIn} className="btn btn-outline-success outline_button">
                                                <strong className="Login_signInText ">Sign in</strong>
                                            </button>
                                            </form>

                                            <p>
                                                                By signing-in you agree to the SN STORE Conditions of Use & Sale. Please
                                                                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                                                            </p>
                                            <button type="submit" onClick= {register} className="login_registerButton">
                                            <strong>Create your SN Store Account</strong> 
                                            </button>

                    </div>

 </div>

{/****************Mobile Viewport****************************** */}

<div className="mobilelogin">

        <video className='mobilevideoTag' autoPlay loop muted
        style={{
            position: "fixed",
            objectFit: "cover",
            width: "100%",
        objectFit: "cover",
        transform: "translate(-50%,-50%)",
            zIndex: " -1",
            left: "50%",
            top: "50%"
            
        }}>
            <source src={MobileVideo} type='video/mp4' />
        </video>
                <Link to="./"> <img className="mobilelogin_logo" src={SNL} alt="Login Image" /> </Link>

        <div className="mobilelogin_container">

                <h1 className="mobileSignIn-font">Sign-In</h1>
                <form>
                <h5 className="mobileemailPasswordFont">E-mail</h5>
                <input className="mobileplaceholder-font" type="text" placeholder="Email" value={email} onChange=
                {e => setEmail(e.target.value)}/>
                <h5 className="mobileemailPasswordFont">Password</h5>
                <input className="mobileplaceholder-font" type="password" placeholder="Password"  value={password} onChange=
                {e => setPassword(e.target.value)} />
                <button type="submit" onClick={signIn} className="login_signInButton">
                    <strong className="mobileLogin_signInText">Sign in</strong>
                </button>
                </form>

                <p>
                                    By signing-in you agree to the SN STORE Conditions of Use & Sale. Please
                                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                                </p>
                        <button type="submit" onClick= {register} className="mobilelogin_registerButton">
                        <strong>Create your SN Store Account</strong> 
                        </button>

        </div>
    </div>
 </>
    )
}

export default Login;
