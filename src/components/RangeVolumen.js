import React, { useState } from "react";

const RangeVolumen = ({ id }) => {   
const [value, setValue] = useState(100);

function reubicar(val, id) {
    const audio = document.getElementById("audioRep");
    setValue(val);
    audio.volume = val / 100;
    document.getElementById(id).value = val    
}
//
return (
        <input
            type="range"
            min="0"
            max="100"
            id={id}
            value={value}
            className="slider"
            style={{}}
            onChange={(e) => reubicar(e.target.value, id)}
        />
        );
};

export default RangeVolumen;