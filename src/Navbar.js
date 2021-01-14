import React from 'react'
import './Navbar.css'
import {NavItems} from './NavItems'
import {Link, animateScroll as scroll} from "react-scroll"

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='nav-menu'>
                {NavItems.map((item,index) => {
                    return (
                        <li className={item.cName} key={index}>
                            <Link
                                activeClass="active"
                                to={item.url}
                                smooth={true}
                                spy={true}
                                offset={-150}
                                duration={500}

                            >{item.title}</Link>
                            <div></div>
                        </li>
                    )
                })}
            </ul>

        </nav>
    )
}

export default Navbar
