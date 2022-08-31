import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({ items }) => {
    console.log(items.descrip);


    return (
        <div className='cont-details' key={items.id}>
            <img className='img-details' src={items.img} alt="" />
            <div className='cont-tituloDetallos'>
                <h2 className='titulo-details'>{items.tiltle}</h2>
                <p className='detalles'>{items.descrip}</p>
            </div>

        </div>
    )
}

export default ItemDetail