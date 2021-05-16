import React from 'react';
import { NavLink } from 'react-router-dom';
import './ThirdNav.css';

const ThirdNav = () => {
    return (
        <div className= 'thirdnav'>
            <NavLink exact activeClassName='activate' className = 'linkings' to='/home'>FIFA</NavLink> 
            <NavLink exact activeClassName='activate' className = 'linkings' to='/home/standing/dota'>Dota 2</NavLink> 
            <NavLink exact activeClassName='activate' className = 'linkings' to='/home/standing/csgo'>CS:GO</NavLink> 
            <NavLink exact activeClassName='activate' className = 'linkings' to='/home/standing/lol'>LoL</NavLink> 
            <NavLink exact activeClassName='activate' className = 'linkings' to='/home/standing/cod'>Call Of Duty</NavLink> 
        </div>
    )
}

export default ThirdNav
