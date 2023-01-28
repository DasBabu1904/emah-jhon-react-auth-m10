import "./LogIn.css"
import React from 'react';
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div className="From_container">
            <div className="From">
                <h1 className="Form_header">This is Login</h1>
                <div >
                    <form action="">
                        <div className="input_group">
                            <label htmlFor="">Email</label>
                            <input type="email" name="" id="" />
                        </div>
                        <div className="input_group">
                            <label htmlFor="">Password</label>
                            <input type="password" name="" id="" />
                        </div>
                        <input className="form_submit_Button" type="submit" value="LogIn" />
                    </form>
                    <p>New to Ema Jhon? <Link className="sign_In_Link_Style" to="/signIn">Create Your account </Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;