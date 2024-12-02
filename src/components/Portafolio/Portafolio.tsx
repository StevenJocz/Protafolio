
import React  from 'react';
import './style/index.css';
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline} from "ionicons/icons";
import web from '../../assets/img/webDesing.jpeg'

interface IPortafolioProps {

}

const Portafolio: React.FC<IPortafolioProps> = () => {
    return (
        <div className="Portafolio">
            <h2>Lo mejor selección de mi portafolio</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur accusantium voluptas animi molestias quae eum recusandae</p>
            <div className='Portafolio_Content'>
                <div className="Portafolio_Content_Card">
                    <div className="Portafolio_Content_Card_Encabezado">
                        <div className="">
                            <h3>Front End Develop</h3>
                            <h2>Lorem ipsum dolor sit, amet consectetur</h2>
                        </div>
                        <IonIcon className='icono' icon={arrowForwardOutline} />
                    </div>
                    <img src={web} alt="" />
                </div>
                <div className="Portafolio_Content_Card">
                    <div className="Portafolio_Content_Card_Encabezado">
                        <div className="">
                            <h3>Front End Develop</h3>
                            <h2>Lorem ipsum dolor sit, amet consectetur</h2>
                        </div>
                        <IonIcon className='icono' icon={arrowForwardOutline} />
                    </div>
                    <img src={web} alt="" />
                </div>
                <div className="Portafolio_Content_Card">
                    <div className="Portafolio_Content_Card_Encabezado">
                        <div className="">
                            <h3>Front End Develop</h3>
                            <h2>Lorem ipsum dolor sit, amet consectetur</h2>
                        </div>
                        <IonIcon className='icono' icon={arrowForwardOutline} />
                    </div>
                    <img src={web} alt="" />
                </div>
            </div>
            <button>Cargar mas</button>
        </div>
    );
}

export default Portafolio;
