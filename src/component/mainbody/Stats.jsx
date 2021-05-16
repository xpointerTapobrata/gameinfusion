import React from 'react';
import { useState, useEffect } from 'react';
import './Stats.css';
import Leaderboards from './Leaderboards.jsx';
import { BrowserRouter } from 'react-router-dom';

const Stats = () => {
    const pandaAPI = 'iEsKIJT3A_sU-tXGSOhZyRTDsGZcRRrkKAxFgUfrL2DPFv48WHA'
    const ac = new AbortController();
    const signal = ac.signal;

    const [fixture, setfixture] = useState([])
    const [standing, setstanding] = useState([])

    const getFixture = async () => {
        let res = await fetch(`https://api.pandascore.co/matches/upcoming?token=${pandaAPI}`, { signal : signal });
        let fixturedata = await res.json();
        setfixture(fixturedata);
        console.log(fixturedata)
     
       
    }

    const getStanding = async () => {
         let res = await fetch(`https://api.pandascore.co/tournaments/5330/standings?token=${pandaAPI}`, {signal : signal});
         let standingdata = await res.json();
         setstanding(standingdata);
         console.log(standingdata);
     }

    useEffect(() => {
         getFixture()
        /*getStanding()*/
        return () => {
            ac.abort()
        }
    }, [])

    useEffect(() => {
        fixture.forEach(i => {
            if(i.begin_at !== null){
                console.log(i.begin_at.split('T').join(' ').replace('Z',''));
            }
            else if(i.begin_at === null){
                console.log('stupid API')
            }
        })
    }, [fixture])

    return (

        <div className='stats'>
           
            <div className='marquee'>
                {
                    fixture.map((fix) => {
                        
                        if(fix.opponents.length > 0 && fix.begin_at !== null){
                        return(
                            <div className='fixture'>
                                <div className="fixtureinfo">
                                    {
                                        fix.opponents.map((opp,index) => {
                                            if(index<1){
                                                return(
                                                    <div className='leftteam'>
                                                        <h4>{opp.opponent.name}</h4>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                    <h5 className='vs'>VS</h5>
                                    
                                    {
                                        fix.opponents.map((opp,index) => {
                                            if(index > 0){
                                                return(
                                                    <div className='rightteam'>
                                                        <h4>{opp.opponent.name}</h4>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                                <p className='tour'>{fix.league.name}</p>
                                <h5 className='game'>{fix.videogame.name}</h5>
                                <h5 className="time">{fix.begin_at.split('T').join(' ').replace('Z','')}</h5>

                            </div>
                        )
                        }
                    })
                }
            </div>
        <BrowserRouter>
            <Leaderboards />
        </BrowserRouter>
        </div>
    )
}

export default Stats
