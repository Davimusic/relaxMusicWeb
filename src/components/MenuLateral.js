"use client"

import { menuCelular } from "@/funciones/MenuCelular";
import Imagenes from "./Img";
import SwitchMode from './SwichtMode';
import '../estilos/menu.css'


const menu = ({id}) => {
    
    const styleLi = {display: 'flex', marginRight: '4vh', marginBottom: '2vh'}
    const styleA = {marginRight: '5px',  marginRight: 'auto'}
    const styleIma = {width: '6vh', height: '6vh',  marginLeft: 'auto'}

    return (
        <nav className='displayMenu color2 colorLetra1'>  
                <ul className="container">
                    <li style={styleLi} className="espacioEquilatero">
                        <a style={styleA} href="#"> Inicio</a>
                        <Imagenes style={styleIma} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692318586/mias/casa_qqdrbh.png'/>
                    </li>
                    <li style={styleLi} className="espacioEquilatero">
                        <a style={styleA} href="#"> Buscar</a>
                        <Imagenes style={styleIma} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692318586/mias/lupa_dyyko5.png'/>
                    </li>
                    <div className="linea-horizontal" style={{marginTop: '3vh', marginBottom: '3vh'}}></div>
                    <li style={styleLi} className="espacioEquilatero">
                        <a style={styleA} href="#"> Crear nueva lista</a>
                        <Imagenes style={styleIma} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692318587/mias/agregar_elne1c.png'/>
                    </li>
                    <li style={styleLi} className="espacioEquilatero">
                        <a style={styleA} href="#"> Mis favoritos</a>
                        <Imagenes style={styleIma} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692318586/mias/corazon_ccetxa.png'/>
                    </li>
                    <li style={styleLi} className="espacioEquilatero">
                        <a style={styleA} href="#"> Mis mas reporducidos</a>
                        <Imagenes style={styleIma} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692318586/mias/corazon_ccetxa.png'/>
                    </li>
                    <div className="linea-horizontal" style={{marginTop: '3vh', marginBottom: '3vh'}}></div>
                    <SwitchMode/>
                    <Imagenes onClick={() => menuCelular('esconder')} className="menuCelularEsconder" link='https://res.cloudinary.com/dplncudbq/image/upload/v1692415538/mias/x_dzlrbc.png'/>
                </ul>                       
        </nav>
    );
};


export default menu;