import './SignUp.css'

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [confpass, setConfPass] = useState('');
    const [error, SetError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmail = (event) => {
        SetEmail(event.target.value)
    }

    const handlePassword = (event) => {
        SetPassword(event.target.value)
    }
    const handleConfPass = (event) => {
        setConfPass(event.target.value)

    }
    const handleError = (event) => {
        SetError(event.target.value)
    }
    const handleCreateNewUser = (event) => {
        console.log('submit')
        event.preventDefault();

        if (password !== confpass) {
            SetError("Your tow password is different ")
            console.log(error)
            return;
        }
        if (password.length < 6) {
            SetError("Password is too small!! you should use more than 6 char")
            console.log(error)
            return;
        }
        createUserWithEmailAndPassword(email, password)
        if (user) {
            navigate('/shop')
        }
    }
    return (
        <div>
            <div className="From_container">
                <div className="From">
                    <h1 className="Form_header">This is sign Up</h1>
                    <div >
                        <form onSubmit={handleCreateNewUser} action="">
                            <div className="input_group">
                                <label htmlFor="">Email</label>
                                <input onBlur={handleEmail} type="email" name="" id="" required />
                            </div>
                            <div className="input_group">
                                <label htmlFor="">Password</label>
                                <input onBlur={handlePassword} type="password" name="" id="" required />
                            </div>
                            <div className="input_group">
                                <label htmlFor="">Confirm Password</label>
                                <input onBlur={handleConfPass} type="password" name="" id="" required />
                            </div>
                            <input className="form_submit_Button" type="submit" value="Sign Up" />
                        </form>
                        <p>New to Ema Jhon? <Link className="sign_In_Link_Style" to="/signUp">Create Your account </Link></p>
                        <div className="horizontal_Line">
                            <div className="horizontal_Line_Block "><hr /></div>
                            <div> <p > or </p></div>
                            <div className="horizontal_Line_Block "> <hr /></div>
                        </div>
                        <p>{error}</p>
                        <div >
                            <button className="LogIn_with_google_button">SignUp With google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;