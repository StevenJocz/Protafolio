
import React from 'react';
import './style/index.css';
import web from '../../assets/img/webDesing.jpeg'
import ux from '../../assets/img/ui-ux-dising.webp'
import backend from '../../assets/img/backend.jpeg'
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline} from "ionicons/icons";

interface IExperienciaProps {

}

const Experiencia: React.FC<IExperienciaProps> = () => {
    return (
        <div className="Experiencia">
            <div className="Experiencia_Content">
                <div className="Experiencia_Content_left animate__animated animate__fadeInLeft">
                    <h2>Experiencia y Logros</h2>
                    <p>He acumulado una rica experiencia, trabajando en numerosos proyectos, contratos y colaboraciones, siempre enfocado en entregar soluciones de alta calidad.</p>
                    <div className="Content_left_div">
                        <div className="Content_left_div_Content">
                            <h3>24+</h3>
                            <h4>Proyectos completados</h4>
                        </div>
                        <div className="Content_left_div_Content">
                            <h3>15+</h3>
                            <h4>Contratos freelancer</h4>
                        </div>
                        <div className="Content_left_div_Content">
                            <h3>5+</h3>
                            <h4>Colaboraciones</h4>
                        </div>
                        <div className="Content_left_div_Content">
                            <h3>4+</h3>
                            <h4>Años de experiencia</h4>
                        </div>
                    </div>
                </div>
                <div className="Experiencia_Content_right animate__animated animate__fadeInRight">
                    <div className="Content_right_Targeta">
                        <img src={ux} alt="" />
                        <div className='Content_right_Targeta_Text'>
                            <div>
                                <h3>UI/UX Desing</h3>
                                <h4>12 proyectos</h4>
                            </div>
                            <IonIcon className='icono' icon={arrowForwardOutline} />
                        </div>
                    </div>
                    <div className="Content_right_Targeta">
                        <img src={web} alt="" />
                        <div className='Content_right_Targeta_Text'>
                            <div>
                                <h3>Front End Develop</h3>
                                <h4>12 proyectos</h4>
                            </div>
                            <IonIcon className='icono' icon={arrowForwardOutline} />
                        </div>
                    </div>
                    <div className="Content_right_Targeta">
                        <img src={backend} alt="" />
                        <div className='Content_right_Targeta_Text'>
                            <div>
                                <h3>Back End Develop</h3>
                                <h4>12 proyectos</h4>
                            </div>
                            <IonIcon className='icono' icon={arrowForwardOutline} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiencia;
