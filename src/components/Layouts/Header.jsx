import React from 'react';

const Header = ({children}) => {

    return (
        <header>
            {children}
            <nav>
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>    
            </nav>
        </header>
    );
}

export default Header;