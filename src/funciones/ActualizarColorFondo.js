import client from "next/client";
import { Serverless } from "next/serverless";

export function actualizarColorFondo(contidoId, id, colorResaltar, colorGeneral, largoArreglo){
    window.addEventListener("load", (event) => {
        console.log(' en');
    });
    for (let u = 0; u < largoArreglo; u++) {
        document.getElementById(`${contidoId}${u}`).style.background = colorGeneral
    }
    try {
        if (id != undefined) {
            document.getElementById(`${contidoId}${id}`).style.background = colorResaltar
        }
    } catch (error) {
        //console.error("Ocurrió un error: actualizarColorFondo");
        //console.error("Ocurrió un error:", error); arroja muchos errores
    }
}