import React from 'react';
import { useEffect, useState } from 'react';
import './NewVideos.css';
import{ NavLink, Switch, Route, BrowserRouter } from 'react-router-dom';
import Match from './Match.jsx';
import Youtube from './Youtube.jsx';
import Tabs from './Tabs.jsx';
import LivePlayers from './LivePlayers';

const Videos = ({ clickme }) => {
    const [videos, setvideos] = useState([])
    const [redirect, setredirect] = useState([])
    const [currentTab, setcurrentTab] = useState(true)

    const ac = new AbortController();
    const signal = ac.signal;
    const YOUTUBE_V3_API_KEY = 'AIzaSyCMOOTLHky3OUtGUIz3dnscl8cVx3_6pNU'
    const pandaAPI = 'iEsKIJT3A_sU-tXGSOhZyRTDsGZcRRrkKAxFgUfrL2DPFv48WHA'


    const changeTab = (e) => {
        setcurrentTab(true)
        
    }

    const changedTab = (e) => {
        setcurrentTab(false)
        
    }

    return (
        <div className="videoTab">
            <div className="tabs">
                <h3 id= '1' className={currentTab ? 'activeTab' : ''} onClick = {changeTab}>MATCH STREAMS &nbsp; <i class="fas fa-gamepad"></i></h3>
                <h3 id= '2' className={!currentTab ? 'activeTab' : ''} onClick = {changedTab}>YOUTUBE STREAMS &nbsp; <i class="fab fa-youtube"></i></h3>
            </div>
            <div className = 'videoContent'>
            {
                
                currentTab === true ? 
                <div className="matches">
                    <p style = {{ height: '30px', width : '140px', fontSize: '1em', backgroundColor: 'rgb(9, 9, 9)', color: 'gray', border : 'none', position : 'absolute', right: '10%', transform: 'translateY(-50%)'}}>Live on Twitch</p>
                    <h2 style = {{ color : 'var(--primary)', width : '100%', display: 'flex', justifyContent: 'center', height:'80px', alignItems:'center'}}>Watch ESPORTS matches featuring games like FIFA, Rainbox Six Seige, Call of Duty & MORE!</h2>
                    <h2 style = {{ color : 'var(--tertiary)', padding: '3em', width : '100%', display: 'flex', justifyContent:'flex-start', alignItems: 'center', height : '50px'}}>Latest or Live</h2>
                    <Match clickme = {clickme}/>
                </div>
                : 
                <div className="live">
                    <h2 style = {{ color : 'var(--primary)', width : '100%', display: 'flex', justifyContent: 'center', height:'100px', alignItems:'center'}}>Streaming Live on YouTube</h2>
                    <LivePlayers />
                </div>
                
            }
            </div>
        </div>
    )
}

export default Videos
