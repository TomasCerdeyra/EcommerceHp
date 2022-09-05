import React, { useEffect, useState } from 'react'
import { productos } from '../../../Mook/ArrayProductos'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [items, setItems] = useState({});

    const { id } = useParams();
    /* Paso el id(strimg) a numero*/
    const ID = Number(id)

    useEffect(()=>{

        const AgarrarProducto = new Promise((res) => {
            /* Filtro los productos para quedarme con el del id */
            const detallesProduct = productos.find(
                (producto) => producto.id === ID
            );

            /* Hago que con un delay de 1s haga el res, diciendole q si hay una categoria muestre esa */
            setTimeout(() => {
                res(detallesProduct);
            });
        });

        AgarrarProducto
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log('error');
            });
    },[]); 

    return (
        <div className='cont-items-details'>
            <ItemDetail items={items}/>
        </div>
    )
}

export default ItemDetailContainer