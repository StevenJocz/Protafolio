
import React from 'react';
import './style/index.css';
import Foto from '../../assets/img/foto.png'
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline, logoInstagram, logoGithub, logoLinkedin, logoWhatsapp } from "ionicons/icons";


interface IHeaderProps {

}

const Header: React.FC<IHeaderProps> = () => {
    return (
        <div className="Header">
            <div className="Header_Descripcion animate__animated animate__fadeInLeft">
                <h2>Soy</h2>
                <h1>Hamiton Espinal</h1>
                <div></div>
                <p>Hola! Soy Hamilton, un desarrollador apasionado por crear productos dinámicos y creativos. Me encanta diseñar experiencias intuitivas que evolucionan con las necesidades de los usuarios.</p>
            </div>
            <div className="Header_Circulo animate__animated animate__fadeInDownBig"></div>
            <img src={Foto} alt="" className='Header_Foto animate__animated animate__fadeInUpBig' />
            <div className="Header_Service animate__animated animate__fadeInRight">
                <h2>Servicios</h2>
                <p>Ofrezco un desarrollo web completo, desde el diseño de interfaces intuitivas hasta la implementación de soluciones escalables y eficientes. Me especializo en crear experiencias de usuario atractivas y gestionar bases de datos para asegurar un rendimiento óptimo en cada proyecto.</p>
                <button>Ver mas <IonIcon className='icono' icon={arrowForwardOutline} /></button>
                <div className='Header_Service_redes'>
                    <a href="">
                        <IonIcon className='icono' icon={logoInstagram} />
                    </a>
                    <a href="">
                        <IonIcon className='icono' icon={logoWhatsapp} />
                    </a>
                    <a href="">
                        <IonIcon className='icono' icon={logoGithub} />
                    </a>
                    <a href="">
                        <IonIcon className='icono' icon={logoLinkedin} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
