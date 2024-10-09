import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
    return (
        <nav>
            <ul className="nav_list">
                <li className="nav_list_item">
                    <NavLink to="/Home" activeClassName="nav_list_item_active">Accueil</NavLink>
                </li>
                <li className="nav_list_item">
                    <NavLink to="/about" activeClassName="nav_list_item_active">A propos</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;