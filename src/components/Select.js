'use client'

const Select = ({ arre, onChange, value, className }) => {
     return (
        <select onChange={onChange} value={value} className={className}>
            {arre.map((opcion, index) => (
                <option key={index} value={opcion}>
                {opcion}
                </option>
            ))}
        </select>
    );
}

export default Select;