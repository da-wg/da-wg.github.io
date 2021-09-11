import React from 'react';
import { ReactComponent as Home } from './img/home.svg';

import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                {/* <p>
                    <a href="../public/index.html">
                        <Home className="Header-home" alt="home"/>
                    </a>
                </p> */}
                {/* <div className="Header-nav">
                    <a href="../public/about.html">
                        About Me
                    </a>
                </div> */}
            </div>
        );
    }
}

export default Header;
