import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({ items }) => {
    const [cantidad, setCantidad] = useState(0);

    const onAdd = (cont) => {
        setCantidad(cont);
    }
    console.log(cantidad);

    return (
        <div className='cont-details' key={items.id}>
            <img className='img-details' src={items.img} alt="" />
            <div className='cont-tituloDetallos'>
                <h2 className='titulo-details'>{items.tiltle}</h2>
                <p className='detalles'>{items.descrip}</p>
                {
                    cantidad === 0 ? (<ItemCount
                        stock={items.stock}
                        onAdd={onAdd}
                        />)
                        : (<Link to='/cart'> <button className='boton-agregarCarrito'  >Agregar al carrito</button> </Link>)
                }
            </div>
            

        </div>
    )
}

export default ItemDetail