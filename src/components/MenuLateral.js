"use client"

import { menuCelular } from "@/funciones/MenuCelular";
import Imagenes from "./Img";
import SwitchMode from './SwichtMode';
import '../estilos/menu.css'


const menu = ({id}) => {
    
    const styleLi = {display: 'flex', marginRight: '4vh', marginBottom: '2vh'}
    const styleA = {marginRight: '5px',  marginRight: 'auto'}
    const styleIma = {width: '6vh', height: '6vh',  marginRight: '2vw'}

    return (
        <nav className='displayMenu color2 colorLetra1'>  
                <ul className="container">
                    <li style={styleLi} className="espacioEquilatero">
                        <Imagenes style={styleIma} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692318586/mias/casa_qqdrbh.png'/>
                        <a style={styleA} href="#"> Inicio</a>
                    </li>
                    <li style={styleLi} className="espacioEquilatero">
                        <Imagenes style={styleIma} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692318586/mias/lupa_dyyko5.png'/>
                        <a style={styleA} href="#"> Buscar</a>
                    </li>
                    <div className="linea-horizontal" style={{marginTop: '3vh', marginBottom: '3vh'}}></div>
                    <li style={styleLi} className="espacioEquilatero">
                        <Imagenes style={styleIma} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692318587/mias/agregar_elne1c.png'/>
                        <a style={styleA} href="#"> Crear nueva lista</a>
                    </li>
                    <li style={styleLi} className="espacioEquilatero">
                        <Imagenes style={styleIma} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692318586/mias/corazon_ccetxa.png'/>
                        <a style={styleA} href="#"> Mis favoritos</a>
                    </li>
                    <li style={styleLi} className="espacioEquilatero">
                        <Imagenes style={styleIma} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692318586/mias/corazon_ccetxa.png'/>
                        <a style={styleA} href="#"> Mis mas reporducidos</a>
                    </li>
                    <div className="linea-horizontal" style={{marginTop: '3vh', marginBottom: '3vh'}}></div>
                    <SwitchMode/>
                    <Imagenes onClick={() => menuCelular('esconder')} className="menuCelularEsconder" link='https://res.cloudinary.com/dplncudbq/image/upload/v1692415538/mias/x_dzlrbc.png'/>
                </ul>                       
        </nav>
    );
};

export default menu;