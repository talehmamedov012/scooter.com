import React from 'react'
import {NavLink } from "react-router-dom"
function Header
    () {
    return (
        <>
            <div className='header flex'>
                <h1> <NavLink to="/">Logo</NavLink> </h1>
                <ul className='flex'>
                    <li> <NavLink to="/about">About</NavLink> </li>
                    <li><NavLink to="/contact"> Contact</NavLink></li>
                    <li>Product</li>
                </ul>
            </div>
        </>
    )
}

export default Header
