import React from 'react';
import { NavLink } from 'react-router-dom';
import './SecondNav.css';

const SecondNav = () => {
    return (
        <div className ='secondnav'>
            
            <NavLink exact activeClassName='active' className='links' to ='/home'>Standings</NavLink>
            <NavLink exact activeClassName='active' className='links' to = '/home/photos'>Photos</NavLink>
            <NavLink exact activeClassName='active' className='links' to = '/home/tweets'>Happenings</NavLink>
            <NavLink exact activeClassName='active' className='links' to = '/home/videos'>Streams</NavLink>
            <NavLink exact activeClassName='active' className='links' to = '/home/shop'>Shop Us</NavLink>
        </div>
    )
}

export default SecondNav
