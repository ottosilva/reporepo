import React from 'react';

const Header = ({titulo}) => {
    return ( 
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo">{titulo} - componente :p</a>
            </div>
        </nav>
     );
}
 
export default Header;