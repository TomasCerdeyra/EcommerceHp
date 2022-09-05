import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'
import { productos } from '../../../Mook/ArrayProductos'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainter = () => {
    /* Guardo el arreglo de productos en items */
    const [items, setItems] = useState([]);

    const { id } = useParams()

    useEffect(() => {
        /* Creo una promesa para agarrar mi array */
        const AgarrarProductos = new Promise((res, rej) => {

            /* Filtro los productos para quedarme con los de cada categoria */
            const productosFilter = productos.filter( 
                (produc) => produc.categoria === id
            );

            /* Hago que con un delay de 1s haga el res, diciendole q si hay una categoria muestre esa */
            setTimeout(() => {
                res(id ? productosFilter : productos);
            });
        });

        AgarrarProductos
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log('error');
            });

        /* Le paso category asi se actualiza cada vez que cambia la categoria */
    }, [id]);

    return (
        <section className='container-list'>

                <div className='cont-cards'>
                    <ItemList items={items} />
                </div>
        
        </section>
    )
}

export default ItemListContainter