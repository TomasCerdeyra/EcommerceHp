import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'
import { productos } from '../../../Mook/ArrayProductos'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
//spinner
import RingLoader from 'react-spinners/RingLoader'

const ItemListContainter = () => {
    /* Guardo el arreglo de productos en items */
    const [items, setItems] = useState([]);
    const [loding, setLouding] = useState(false);

    //Aagarro el parametro de la categoria seleccionada
    const { id } = useParams()

    useEffect(() => {
        //Cambio el estado del louding a true para q no se muestre
        setLouding(true);
        /* Creo una promesa para agarrar mi array */
        const AgarrarProductos = new Promise((res, rej) => {

            /* Filtro los productos para quedarme con los de cada categoria */
            const productosFilter = productos.filter(
                (produc) => produc.categoria === id
            );

            /* Hago que con un delay de 1s haga el res, diciendole q si hay una categoria muestre esa */
            setTimeout(() => {
                res(id ? productosFilter : productos);
            }, 2000 );
        });

        AgarrarProductos
            .then((data) => {
                setItems(data);
                setLouding(false)
            })
            .catch((error) => {
                console.log('error');
            });

        /* Le paso category asi se actualiza cada vez que cambia la categoria */
    }, [id]);

    return (
        <section className='container-list'>

            {
                loding ? <RingLoader color='hsla(58, 67%, 53%, 1)' size={100}/>
                    :
                    <>
                        <div className='cont-cards'>
                            <ItemList items={items} />
                        </div>
                    </>
            }

        </section>
    )
}

export default ItemListContainter