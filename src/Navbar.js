import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {NavItems} from './NavItems'
import {Link as ScrollLink} from "react-scroll"

function Navbar() {
    return (
        <nav>
            <div className="nav-title">RentApps</div>
            <ul className='nav-menu'>
                {NavItems.map((item,index) => {
                    return (
                        <li className={item.cName}>
                            <Link to={item.url}>{item.title}</Link>
                            <div></div>
                        </li>
                    )
                })}
            </ul>

        </nav>
    )
}

export default Navbar
