import Image from 'next/image'

const Imagenes = ({ link, onClick, style, className, id }) => (
        <Image
          width={5000}
          height={5000}
          style={style}
          onClick={onClick}
          className={className}
          id={id}
          alt="The guitarist in the concert."
          src= {link}            
        />
);

export default Imagenes;   