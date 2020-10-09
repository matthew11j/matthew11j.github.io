import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

export default function NavBar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className='navbar-logo'>
                    Matthew Jackson
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links'>
                            <span>About Me</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/experience' className='nav-links'>
                            <span>Experience</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links'>
                            <span>Projects</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sas' className='nav-links'>
                            <span>Skills & Strengths</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}