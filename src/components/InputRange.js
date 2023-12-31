import React, { useState } from "react";

const RangeInput = ({ id }) => {   
const [value, setValue] = useState(0);

function reubicar(val, id) {
    const audio = document.getElementById("audioRep");
    if (id === "rangeTime") {
    setValue(val);
    audio.currentTime = val;
    } else {
        setValue(val);
        audio.volume = val / 100;
        document.getElementById(id).value = val
    }
}

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

export default RangeInput;
