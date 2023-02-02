import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import '../Header/Header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    const navigate = useNavigate()
    const hangleImgClick = () => {
        navigate('/home')
    }
    return (
        <nav className='header'>
            <img onClick={hangleImgClick} src={logo} alt="" />
            <div>
                <Link to="/order">Order</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                {
                    user ?
                        <button onClick={handleSignOut}>Sign Out</button>
                        :
                        <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;