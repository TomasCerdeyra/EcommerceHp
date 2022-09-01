import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='seccion1'>
            <div className='cont-h1'>
                <h1>
                    Articulos de Harry Potter:
                </h1>
            </div>
            <aside className="aside-list">
                <nav>
                    <ul className="ul-list">
                        <Link className='link-li'  to='/category/Varitas'>
                            <li>Varitas</li>
                        </Link>

                        <Link className='link-li' to='/category/Libros'>
                            <li>Libros</li>
                        </Link>

                        <Link className='link-li' to='/category/FunkoPop'>
                            <li>Funko Pop</li>
                        </Link>

                        <Link className='link-li' to='/category/Grageas'>
                            <li>Grageas</li>
                        </Link>

                        <Link className='link-li' to='/category/Accesorios'>
                            <li>Accesorios</li>
                        </Link>

                        <Link className='link-li' to='/category/Indumentarias'>
                            <li>Indumentarias</li>
                        </Link>

                        <Link className='link-li' to='/category/Figuras'>
                            <li>Figuras</li>
                        </Link>
                    </ul>
                </nav>
            </aside>
        </div>
    )
}

export default NavBar