import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';

const Header = ({numItems, total}) => {
    return (
        
        <div className="header row">
            
            <Link className="logo text-dark" to="/">Re-Store</Link> 
            <Link to="/card/"><i className="cart-icon fa fa-shopping-cart"/> {numItems} items (${total})</Link>

        </div>        
    )
}

export default Header;