import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Shipment.css'

const Shipment = () => {
    const [email, SetEmail] = useState('');
    const [name, SetName] = useState('');
    const [phone_number, setPhone_number] = useState('');
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

    const handleName = (event) => {
        SetName(event.target.value)
    }
    const handlePhone_number = (event) => {
        setPhone_number(event.target.value)
    }
    const handleLogIn = (event) => {
        event.preventDefault();
        const shippingINfo = [name, email, phone_number]
        console.log(shippingINfo)
    }


    return (

        <div className="From_container">
            <div className="From">
                <h1 className="Form_header">Welcome to inventory</h1>
                <div >
                    <form onSubmit={handleLogIn} action="">
                        <div className="input_group">
                            <label htmlFor="">Email</label>
                            <input onBlur={handleEmail} type="email" name="" id="" required />
                        </div>
                        <div className="input_group">
                            <label htmlFor="">Name</label>
                            <input onBlur={handleName} type="text" name="" id="" required />
                        </div>
                        <div className="input_group">
                            <label htmlFor="">Phone Number</label>
                            <input onBlur={handlePhone_number} type="" name="" id="" required />
                        </div>
                        <input className="form_submit_Button" type="submit" value="LogIn" />
                    </form>
                    <p>{error?.massage}</p>

                </div>
            </div>
        </div>
    );
};

export default Shipment;