
import React from 'react';
import './style/index.css';
import img from '../../assets/img/quotation-marks.png'

interface ITestimoniosProps {

}

const Testimonios: React.FC<ITestimoniosProps> = () => {
    return (
        <div className="Testimonios">
            <div className="Testimonios_Content">
                <img src='https://th.bing.com/th/id/OIP.2cOe4ej-roywKGJXcvQQUQHaF7?rs=1&pid=ImgDetMain' alt="" />
                <div className='Testimonios_Info'>
                    <img src={img} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quos voluptatum, placeat et, tenetur, optio ea consectetur voluptatibus sint dolor tempore quia cum facilis. Esse suscipit atque rerum voluptas laborum!</p>
                    <h2>Edward Collins</h2>
                    <h3>CEO Empresa</h3>
                    <h4>8 / 10</h4>
                </div>
            </div>
        </div>
    );
}

export default Testimonios;
