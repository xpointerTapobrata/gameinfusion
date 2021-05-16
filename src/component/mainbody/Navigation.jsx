import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navigation = ({ grabResults }) => {
    const [tooltip, settooltip] = useState(false)
    const [search, setsearch] = useState('')

    const handleSearchChange = (e) => {
        setsearch(e.target.value)
    }

    const changeState = () => {
        settooltip(true)
    }

    const reverseState = () => {
        settooltip(false)
    }

    const checkresult = (e) => {
        search && grabResults(e)
    }

    return (
        <div className='nav'>
            <NavLink to= '/home'>
                <h3 onMouseEnter={changeState} onMouseLeave={reverseState}>GAME INFUSION</h3>
                <div className={tooltip ? "tooltip visible" : "tooltip"}>Homepage</div>
            </NavLink>
            
            <div className="search">
                <input type="text" placeholder='Search a game...' onChange ={handleSearchChange}/>
                <button to = '/searchresults' onClick = {()=>checkresult(search)}><i class="fas fa-search"></i></button>
            </div>
        </div>
    )
}

export default Navigation
