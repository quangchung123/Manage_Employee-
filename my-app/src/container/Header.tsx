import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <ul>
                    <li>My Application</li>
                    <li>City</li>
                    <li>Template</li>
                </ul>
            </div>
            <div className="header__right">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;