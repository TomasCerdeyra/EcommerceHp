import React from 'react'
import { Route,Routes } from 'react-router-dom'
import NavBar from './NavBar/NavBar'
import ItemListContainter from './ItemLisContainer/ItemListContainter'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import './main.css'

const Main = () => {
    return (
        <main>
            <NavBar />
            {/* <Routes> */}
                {/* <Route path='' element/> */}
                <ItemListContainter saludo='Bienvenido a la tiende de Articulos de Harry Potter. ...Proximamente' />
                <ItemDetailContainer />
            {/* </Routes> */}
        </main>
    )
}

export default Main