import React from 'react'
import './items.css'
const Item = ({items}) => {
    console.log(items.img);
    return (
        <>
            <img className='img-card' src={items.img} alt="" />
            <p className='p-card'>{items.tiltle}</p>
            <button className='boton-card' >Comprar Ahora</button>
        </>
    )
}

export default Item