import React, { useEffect, useState } from 'react'
import { productos } from '../../Mook/ArrayProductos'
import ItemDetail from './Productos-items-details/ItemDetail';
import './Productos-items-details/details.css'

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{

        const detallesProduct = productos.find((producto) => producto.id === 1);
        
        setItems(detallesProduct)
    },[]) 

    return (
        <div className='cont-items-details'>
            <ItemDetail items={items}/>
        </div>
    )
}

export default ItemDetailContainer