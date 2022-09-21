import React, { useEffect, useState } from 'react'

import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
//firebase
import { dataBase } from '../../../Firebase/firebaseCongif'
import { getDoc, doc, collection } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [items, setItems] = useState({});

    //Agarro el parametro id que es la categoria del producto
    const { id } = useParams();

    useEffect(()=>{

        //agarro la colleccion
        const ItemCollection = collection(dataBase, "productos");

        //con doc agarro el id de los productos
        const ref = doc(ItemCollection, id);

        //con getDoc comom getDocs resuelvo la promesa y guardo el id con el spred en la data
        getDoc(ref).then((data)=>{
            setItems({id: data.id, ...data.data()});
        });

    },[]); 

    return (
        <div className='cont-items-details'>
            <ItemDetail items={items}/>
        </div>
    )
}

export default ItemDetailContainer