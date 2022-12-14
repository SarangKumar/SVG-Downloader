import React from 'react'
import { NavLink } from 'react-router-dom'
// import {name} from '../pages/Homepage'
// import {name} from Homepage;

const Navigation = () => {
    return (
        <div className='navigation_comp'>
            <nav className='navigation_nav'>
                <ul className='navigation_ul_logo'>
                    <li>Planet</li>
                    <li>SVG</li>
                </ul>
                <ul className='navigation_ul'>
                    <li><NavLink className={({ isActive }) => isActive ? 'nav_active' : 'nav_links'} to='/'>Homepage</NavLink></li>
                    <li>•</li>
                    <li><NavLink className={({ isActive }) => isActive ? 'nav_active' : 'nav_links'} to='/about'>About</NavLink></li>
                    {/* <li>•</li>
                    <li><NavLink className={({ isActive }) => isActive ? 'nav_active' : 'nav_links'} to='/login'>Login</NavLink></li> */}
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;