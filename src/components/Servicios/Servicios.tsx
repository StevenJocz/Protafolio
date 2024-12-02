
import React from 'react';
import './style/index.css';
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import ux from '../../assets/img/ui.png'
import web from '../../assets/img/web-design.png'
import back from '../../assets/img/developer.png'
interface IServiciosProps {

}

const Servicios: React.FC<IServiciosProps> = () => {
    return (
        <div className="Servicios">
            <div className="Servicios_Content">
                <img src={ux} alt="" />
                <h2>UI/UX Desing</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rem consequuntur maiores quibusdam neque officia asperiores</p>
                <button>Ver mas <IonIcon className='icono' icon={arrowForwardOutline} /></button>
            </div>
            <div className="Servicios_Content">
                <img src={web} alt="" />
                <h2>Front End Develop</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rem consequuntur maiores quibusdam neque officia asperiores</p>
                <button>Ver mas <IonIcon className='icono' icon={arrowForwardOutline} /></button>
            </div>
            <div className="Servicios_Content">
                <img src={back} alt="" />
                <h2>Back End Develop</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rem consequuntur maiores quibusdam neque officia asperiores</p>
                <button>Ver mas <IonIcon className='icono' icon={arrowForwardOutline} /></button>
            </div>
        </div>
    );
}

export default Servicios;
