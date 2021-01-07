import React from 'react'
import { Link } from 'react-router-dom'
import {NavItems} from './NavItems'

function Navbar() {
    return (
        <nav>
            <ul>
                {NavItems.map((item,index) => {
                    return (
                        <li>
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
