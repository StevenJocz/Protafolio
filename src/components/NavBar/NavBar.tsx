
import React from 'react';
import './style/index.css';
import img from '../../assets/img/icono.png';
import { IonIcon } from "@ionic/react";
import { menuOutline } from "ionicons/icons";
interface INavBarProps {

}

const NavBar: React.FC<INavBarProps> = () => {
    return (
        <div className='NavBar'>
            <div>
                <img src={img} alt="" />
                <h1>Hamilton Espinal</h1>
                <ul className=''>
                    <li className="">Home</li>
                    <li className="">Portafolio</li>
                    <li className="">Testimonios</li>
                    <li className="">About</li>
                </ul>
            </div>

            <ul className=''>
                <li className="">in</li>
                <li className="">
                    <IonIcon className='icono' icon={menuOutline} />
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
