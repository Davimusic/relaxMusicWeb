"use client"


import RangeInput from './InputRange'
import Menu from './Menu'
import EditoresReproductor from './EditoresReproductor';
import { ToastContainer } from 'react-toastify';
import { ElementoAudio } from './ElementoAudio';
import 'react-toastify/dist/ReactToastify.css';



export function Video(){
    return(
        <div style={{position: 'relative'}}>
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




