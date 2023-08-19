"use client"
import '../estilos/swichMode.css'
import '../app/globals.css'
import { paletaDeColores } from '@/funciones/PaletaDeColores'
import { variablesGlobales } from '@/funciones/VariablesGlobales';
import { actulizarColorFondoContenido } from '@/funciones/ActualizarColorFondoContenido';


const switchMode = ({id}) => {

    function screenMode(){
        if(variablesGlobales().getModoPantalla() == 'oscuro'){
            variablesGlobales().setModoPantalla('light') 
            paletaDeColores().actualizarBackground('.color1', '#051f34')
            paletaDeColores().actualizarColor('.colorLetra1', 'white')
            paletaDeColores().actualizarBackground('.color2', '#027495')
        } else {
            variablesGlobales().setModoPantalla('oscuro')
            paletaDeColores().actualizarBackground('.color1', 'white')
            paletaDeColores().actualizarColor('.colorLetra1', '#027495')
            paletaDeColores().actualizarBackground('.color2', '#f4f5f5')
        }
        actulizarColorFondoContenido()
    }

    return (
        <div>
            <label className="switch">
                <input onClick={() => screenMode()}   type="checkbox"/>
                <span className="slide round"></span>
            </label>
        </div>
    );
};


export default switchMode;