import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {

    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    const menuItems =
        <><li><NavLink to="/">Home</NavLink></li>
            <li>
                <NavLink to="/about">
                    About
                </NavLink>
            </li>
            <li><NavLink to="/appointment">Appointments</NavLink></li>
            {user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>}
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li>{user ? <button onClick={logout}>Sign Out</button> : <NavLink to="/login">Login</NavLink>}</li>
            <li><NavLink to="/reviews">Reviews</NavLink></li>
        </>
    return (
        <div>
            <div className="navbar bg-base-100 px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <NavLink to="/" className="btn btn-ghost normal-case text-xl">Doctors Portal</NavLink>
                </div>
                <div className="navbar-end hidden lg:flex bg-base-100">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;