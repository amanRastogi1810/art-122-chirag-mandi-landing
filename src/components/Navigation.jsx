import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="#appWork">App Work</a>
            </li>
            <li>
                <a href="#dwnApp">Download App</a>
            </li>
            <li>
                <a href="#team">Our Team</a>
            </li>
            <li>
                <a href="#faq">Faq</a>
            </li>
        </ul>
    );
}

export default Navigation;
