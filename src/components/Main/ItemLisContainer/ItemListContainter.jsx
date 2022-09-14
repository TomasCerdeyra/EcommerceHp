import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'

import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
//spinner
import RingLoader from 'react-spinners/RingLoader'
//firebase
import { collection, getDocs, query, where } from 'firebase/firestore'
import { dataBase } from '../../../Firebase/firebaseCongif'

const ItemListContainter = () => {
    /* Guardo el arreglo de productos en items */
    const [items, setItems] = useState([]);
    const [loding, setLouding] = useState(true);

    //Aagarro el parametro de la categoria seleccionada
    const { id } = useParams()
    console.log(id);

    useEffect(() => {
        //con collection agarro y meto en itemCollection mis productos de firebase
        const itemCollection = collection(dataBase, "productos");
        //con el metodo query traigo dos parametros el primero es el collection de mi firebase
        //y el segundo es el metodo where que indica que elemento de mi objeto es y siquiero que sea igual o diferente a lo que le indique en el tercer parametro

        const categoria = () => {
            let q, productos
            //si ide no es undefines hago la query para quedarme con el id de la categoria
            if (id !== undefined) {
                q = query(itemCollection, where("categoria", "==", id));
            }

            //si id es undefined productos es los productos completos sin es la categoria que se eligio
            id === undefined ? productos = itemCollection : productos = q;

            return productos
        }

        //getDocs devulve una probesa que resuelvo y mapeo la data para agregarle el id al objeto y setear a los items
        getDocs(categoria())
            .then((data) => {
                const products = data.docs.map((produc) => {
                    return {
                        //con .data() que es un metodo de firestore con el que puedo ingresar al contenido del objeto 
                        //pero el id me quedo un paso antes. Directamente product.id, por lo que se lo tengo que agregar 
                        id: produc.id,
                        ...produc.data()
                    }
                });
                setItems(products);
            })
            .catch((error) => {
                console.log("erorr");
            })
            .finally(() => {
                setLouding(false);
            })
    }, [id]);

    return (
        <section className='container-list'>

            {
                loding ? <RingLoader color='hsla(58, 67%, 53%, 1)' size={100} />
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



/* /* Creo una promesa para agarrar mi array 
const AgarrarProductos = new Promise((res, rej) => {

    /* Filtro los productos para quedarme con los de cada categoria 
    const productosFilter = productos.filter(
        (produc) => produc.categoria === id
    );

    /* Hago que con un delay de 1s haga el res, diciendole q si hay una categoria muestre esa 
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
    }); */