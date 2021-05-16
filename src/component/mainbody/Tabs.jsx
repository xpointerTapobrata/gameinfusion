import React from 'react';
import { NavLink } from 'react-router-dom';
import './Tabs.css';

const Tabs = () => {
    return (
        <div className = 'tabMenu'>
            <NavLink exact to = '/home/videos' activeClassName= 'activeTab' className = 'tabItems'>MATCH STREAMS</NavLink>
            <NavLink exact to = '/youtube' activeClassName= 'activeTab' className = 'tabItems'>YOUTUBE STREAMS</NavLink>
        </div>
    )
}

export default Tabs
