import React from 'react';
import { useEffect, useState } from 'react';
import{ NavLink, Switch, Route } from 'react-router-dom';
import './Match.css';

const Match = ({ clickme }) => {

    const [videos, setvideos] = useState([])

    const pandaAPI = 'iEsKIJT3A_sU-tXGSOhZyRTDsGZcRRrkKAxFgUfrL2DPFv48WHA'

    const ac = new AbortController();
    const signal = ac.signal;

    const getvideos = async () => {
        let res = await fetch(`https://api.pandascore.co/matches/past?token=${pandaAPI}`, {signal : signal})
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
         videos.length < 1 ? <p style = {{ color : 'var(--tertiary)', height: '95vh', width : '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Fetching data... Please wait</p> :
            <div className={videos.length < 1 ? "videos" :"videos showVideos"}>
                
            {
                videos.map((vid, index) => {
                    if(index < 12){
                    
                        return(
                            
                            <div className="videoInfo">
                                <img src={vid.league.image_url} alt="image" height='80px' width='80px'/>
                                <div className="detailsVideo">
                                
                                    <h3 style = {{color : 'var(--primary)', textAlign : 'right'}}>{vid.name}</h3>
                                    <p className='colored'>{vid.league.name}</p>
                                    <p className ='gamename'>{vid.videogame.name}</p>
                                
                                </div>
                                <div className="btnclas">
                                <NavLink exact to='/watch'><button onClick={() => clickme(vid)} id={vid.official_stream_url} className="vidWatch">WATCH HERE</button></NavLink>
                                </div>
                            
                            </div>
                            
                        )
                    }
                })
            }

            </div>
        
    )
}

export default Match
