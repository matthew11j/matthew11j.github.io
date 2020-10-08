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
                    Meme
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links'>
                            About Me
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/experience' className='nav-links'>
                            Experience
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links'>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sas' className='nav-links'>
                            Skills & Strengths
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}