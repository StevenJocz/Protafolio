
import React from 'react';
import './style/index.css';
import foto from '../../assets/img/fotodos.png'

interface IContactoProps {

}

const Contacto: React.FC<IContactoProps> = () => {
    return (
        <div className="Contacto">
            <div className='Contacto_Info'>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos est sed quis illum itaque.</p>
                <button>Contantame</button>
            </div>
            <img src={foto} alt="" />
            <div className='Contacto_Circulo'></div>
        </div>
    );
}

export default Contacto;
