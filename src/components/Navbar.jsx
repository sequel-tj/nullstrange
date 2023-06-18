import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';
import './Navbar.css';

const Navbar = () => {
    return (
        <navbar>
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
        </navbar>
    );
}
export default Navbar;