import React from 'react';
import logo from '../../optimalogo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar bg-gray-200 rounded">
            <div className="flex-1">
                <img className='logo' src={logo} alt="Logo" />
                <a href='/' className="btn btn-ghost normal-case text-3xl text-violet-700">Refreshing Life</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><a href='/' className='hidden md:block p-3  md:hover:text-violet-700 md:no-underline md:hover:underline md:decoration-2 md:decoration-violet-700 md:underline-offset-8'>Home</a></li>
                    <li><a href='/' className='hidden md:block p-3  md:hover:text-violet-700 md:no-underline md:hover:underline md:decoration-2 md:decoration-violet-700 md:underline-offset-8'>Blog</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;