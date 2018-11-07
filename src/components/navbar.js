import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <NavLink activeClassName="active" exact to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/posts">Posts</NavLink>
                <NavLink activeClassName="active" to="/profile">Profile</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;