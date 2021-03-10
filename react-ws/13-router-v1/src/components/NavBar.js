import React from 'react';
import {Link} from 'react-router-dom';
const NavBar = () => {
    return (
        <div>

            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link> 
                </li>
                <li className="nav-item">
                <Link to="/product-form" className="nav-link">Product Form</Link>
                </li>
                <li className="nav-item">
                <Link to="/listAll" className="nav-link">Display</Link> 
                </li>
                <li className="nav-item">
                <Link to="/find-product" className="nav-link">Search </Link> 
                </li>
              
            </ul>

        </div>
    );
};

export default NavBar;