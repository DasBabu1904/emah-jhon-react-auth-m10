import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import '../Header/Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/order">Order</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;