import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        
        <div className="header d-flex justify-content-start col-md-6">
            <h3>
                <Link to="/">Home</Link> 
            </h3>
            <ul className="header-list d-flex col-md-6">
                <li>
                    <Link to="/card/">Card</Link>
                </li>
            </ul>     
        </div>        
    )
}

export default Header;