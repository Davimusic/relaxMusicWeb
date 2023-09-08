'use client'

const Select = ({ arre, onChange }) => {

    return (
        <select onChange={onChange}>
            {arre.map((opcion, index) => (
                <option key={index} value={opcion}>
                {opcion}
                </option>
            ))}
        </select>
    );
}

export default Select;