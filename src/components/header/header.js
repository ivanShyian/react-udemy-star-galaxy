import React from 'react';
import  './header.css'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className='header'>
            <h3 className='header-logo'>Star DB</h3>
            <ul className='header-navigation'>
               <li>
                   <NavLink to='/' activeClassName='is-active' exact>People</NavLink>
               </li>
                <li>
                    <NavLink to='/planets' activeClassName='is-active'>Planets</NavLink>
                </li>
                <li>
                    <NavLink to='/starships' activeClassName='is-active'>Planets</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Header;
