import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import { productos } from '../../../Mook/ArrayProductos'
import ItemList from '../ItemList/ItemList'


const ItemListContainter = (props) => {
    /* Guardo el arreglo de productos en items */
    const [items, setItems] = useState([]);

    useEffect(() => {
        /* Creo una promesa para agarrar mi array */
        const AgarrarProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos);
            }, 3000);
        });

        AgarrarProductos
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log('error');
            });
    }, []);


    function agregarCarrito() {
        alert('Se agrego el producto al carrito')
    }


    return (
        <section className='container-list'>
            <div className='cont-cards'>
                <ItemList items={items} />
            </div>

            {/* <ItemCount
                stock={5}
                initial={1}
                onAdd={agregarCarrito}
            /> */}
        </section>
    )
}

export default ItemListContainter