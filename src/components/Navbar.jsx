import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <h1>NullStrange</h1>
                <ul>
                    <li>
                        <Link className='active' to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/Beats">BEATS</Link>
                    </li>
                    <li>
                        <Link to="/About">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/Contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;