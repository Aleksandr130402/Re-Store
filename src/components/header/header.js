import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <div className="header-links">
            <Link href="/">Home</Link>
            <Link href="/card">Card</Link>
        </div>        
    )
}

export default Header;