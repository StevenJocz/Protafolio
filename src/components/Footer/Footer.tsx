
import React from 'react';
import './style/index.css';

interface IFooterProps {

}

const Footer: React.FC<IFooterProps> = () => {
    return (
        <div className="Footer">
            <h1>Hamilton Espinal</h1>
            <ul>
                <li className="">Home</li>
                <li className="">Portafolio</li>
                <li className="">Testimonios</li>
                <li className="">About</li>
            </ul>
        </div>
    );
}

export default Footer;
