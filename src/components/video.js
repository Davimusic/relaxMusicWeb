"use client"


import RangeInput from './InputRange'
import Menu from './Menu'
import EditoresReproductor from './EditoresReproductor';
import { ToastContainer } from 'react-toastify';
import { ElementoAudio } from './ElementoAudio';
import { menuCelular } from '@/funciones/MenuCelular';
import Imagenes from "./Img";
import 'react-toastify/dist/ReactToastify.css';



export function Video(){
    return(
        <div>
            <div className='menuSuperior'>
                <Imagenes style={{height: 'fit-content'}} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692559936/mias/icon_efg3sf.png'/>
                <Imagenes onClick={() => menuCelular('mostrar')} className="menuCelular" link='https://res.cloudinary.com/dplncudbq/image/upload/v1692414994/mias/menu_quakfw.png'/>
            </div>
            <ToastContainer />
            <div style={{display: 'flex'}}>
                <Menu />
                {ElementoAudio()} 
            </div>
            <div> 
                <div className="linea-horizontal"></div> 
                <div style={{display: 'flex'}} className='espacioEquilatero'>
                    <RangeInput id='input'/>
                </div>       
                <EditoresReproductor/>
            </div>
        </div>
    )
}




