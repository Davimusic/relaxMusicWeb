import React, { useState, useEffect } from "react";

let datoDinamico = 0
const RangeInput = ({id}) => {
    const [value, setValue] = useState(0);
    const [volume, setVolume] = useState(0);

    function reubicar(val, id){
        let audio = document.getElementById('audioRep')
        if(id == 'rangeTime'){
            setValue(val)
            audio.currentTime = val
        } else{
            setVolume(val)
            audio.volume = val / 100
            document.getElementById(id).value = val
        }
        datoDinamico = val
    }


    return (
        <input
        type="range"
        min="0"
        max="100"
        id={id}
        value={datoDinamico}
        className="slider"
        style={{}}
        onChange={(e) => reubicar(e.target.value, id)}
        />
    );
};

export default RangeInput;
