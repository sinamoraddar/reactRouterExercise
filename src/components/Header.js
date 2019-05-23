import React from 'react';
import { NavLink } from "react-router-dom";
const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink exact to="/" activeStyle={{fontWeight:'bold'}}>Home</NavLink>
        <NavLink exact to="/portfolio" activeStyle={{fontWeight:'bold'}}>Portfolio</NavLink>
        <NavLink to="/contact" activeStyle={{fontWeight:'bold'}}>Contact</NavLink>
    </header>
);
export default Header;