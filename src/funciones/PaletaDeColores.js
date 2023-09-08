let diccionarioColores = {
                            1: '#051f34',
                            2: '#027495',
                            3: '#01a9c1',
                            4: '#bad6db',
                            5: '#f4f5f5'
                        }


export function paletaDeColores() {

    function getColor(num) {
        return diccionarioColores[num];
    }

    function setColor(newValue) {
        diccionarioColores[1] = newValue
    }

    function actualizarBackground(idColor, newColor) {
        /*let color = document.querySelectorAll(idColor);
        color.forEach(elemento => {
            elemento.style.transition= '1s';
            elemento.style.backgroundColor = newColor;
        });*/
    }

    function actualizarColor(idColor, newColor) {
        let color = document.querySelectorAll(idColor);
        color.forEach(elemento => {
            elemento.style.transition= '1s';
            elemento.style.color = newColor;
        });
    }

    return {
        getColor,
        setColor,
        actualizarBackground,
        actualizarColor
    };
}