import React from 'react';
import { useState, useEffect } from 'react';
import './ListVids.css';
import{ NavLink } from 'react-router-dom';

const ListVids = ({ clickme }) => {

    const [videos, setvideos] = useState([])
    const [redirect, setredirect] = useState([])

    const ac = new AbortController();
    const signal = ac.signal;
    const YOUTUBE_V3_API_KEY = 'AIzaSyCMOOTLHky3OUtGUIz3dnscl8cVx3_6pNU'
    const pandaAPI = 'iEsKIJT3A_sU-tXGSOhZyRTDsGZcRRrkKAxFgUfrL2DPFv48WHA'
    
    const getvideos = async () => {
    /*let res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=completed&type=video&videoCategoryId=20&regionCode=US&maxResults=10&lr=en&relevanceLanguage=en&key=${YOUTUBE_V3_API_KEY}`, {signal : signal});*/
    let res = await fetch(`https://api.pandascore.co/matches/past?token=${pandaAPI}`)
    let data = await res.json();
    console.log(data)
    setvideos(data)
    
    }

    useEffect(() => {
        getvideos()

        return () => {
            ac.abort()
        }
    }, [])

    return (
        <div className='listvids'>
            <div className="header">
                <h2>STREAMING LIVE</h2>
            </div>
            {
                videos.map((vi, ind) => {
                    if(vi.name.length < 40 && ind< 20){
                        return(
                        <div className="containerVid">
                            <img src={vi.league.image_url} alt="" height='50px' width='50px' />              
                            <div className="rightVid">
                                <NavLink exact to = '/watch' onClick={() => clickme(vi)}> <h4>{vi.name}</h4> </NavLink>
                                <h5>{vi.league.name}</h5>
                                <h5 className='vidgame'> <span style ={{color : 'var(--tertiary)', fontWeight : "500"}}>Playing &nbsp;</span> {vi.videogame.name}</h5>
                            </div>
                            
                        </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default ListVids
