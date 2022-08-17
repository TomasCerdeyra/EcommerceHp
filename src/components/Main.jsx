import React from 'react'
import NavBar from './NavBar'
import ItemListContainter from './ItemListContainter'
import '../styles/main.css'

const Main = () => {
    return (
        <main>
            <NavBar />
            <ItemListContainter saludo='Bienvenido a la tiende de Articulos de Harry Potter. ...Proximamente' />
        </main>
    )
}

export default Main