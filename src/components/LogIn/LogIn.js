import "./LogIn.css"
import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const LogIn = () => {

    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const [
        signInWithEmailAndPassword,
        user,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmail = (event) => {
        SetEmail(event.target.value)
    }

    const handlePassword = (event) => {
        SetPassword(event.target.value)
    }

    const handleLogIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
        navigate(from, { replace: true })

    }
    return (
        <div className="From_container">
            <div className="From">
                <h1 className="Form_header">This is Login</h1>
                <div >
                    <form onSubmit={handleLogIn} action="">
                        <div className="input_group">
                            <label htmlFor="">Email</label>
                            <input onBlur={handleEmail} type="email" name="" id="" required />
                        </div>
                        <div className="input_group">
                            <label htmlFor="">Password</label>
                            <input onBlur={handlePassword} type="password" name="" id="" required />
                        </div>
                        <input className="form_submit_Button" type="submit" value="LogIn" />
                    </form>
                    <p>{error?.massage}</p>
                    <p>New to Ema Jhon? <Link className="sign_In_Link_Style" to="/signUp">Create Your account </Link></p>
                    <div className="horizontal_Line">
                        <div className="horizontal_Line_Block "><hr /></div>
                        <div> <p > or </p></div>
                        <div className="horizontal_Line_Block "> <hr /></div>
                    </div>
                    <div >
                        <button className="LogIn_with_google_button">Login With google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;