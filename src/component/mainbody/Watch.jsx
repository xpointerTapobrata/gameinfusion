import React,{ useState, useEffect } from 'react';
import './Watch.css';
import ReactPlayer from 'react-player';
import ListVids from './ListVids.jsx';
import Stream from './Stream.jsx';

const Watch = ({ vidstream, vidname, vidleague, vidtour, vidgame, english, official, schedule, clickme }) => {

    const [showPlay, setshowPlay] = useState(true)

    const [progress, setprogress] = useState(0)
    const [playing, setplaying] = useState(false)
    const [muted, setmuted] = useState(false)
    const [showVolume, setshowVolume] = useState(true)
    const [volume, setvolume] = useState(0)
    const [currentVol, setcurrentVol] = useState(null)
    const [controlOpacity, setcontrolOpacity] = useState(false)
    const [speedsShow, setspeedsShow] = useState(false)
    const [speed, setspeed] = useState(1.0)
    const [truthValue, settruthValue] = useState(1)
    const [currentTime, setcurrentTime] = useState(0)
    const [controls, setcontrols] = useState(true)
    const [timing, settiming] = useState([])

    

    return (
        <div className='watch'>
            
            {
                <div className="player" style = {{ backgroundColor : 'rgb(20, 20, 20)', border : '1px solid var(--primary)'}}>
                            
                    <ReactPlayer className='screen'
                        url={vidstream}
                        playing={playing}
                        volume={volume}  
                        controls = {controls} 

                        height='1080' width='1920'
                    />
                    <div className="details">
                        <div className="leftDetails" style = {{ backgroundColor : 'rgb(20, 20, 20)'}}>
                            <div className = 'vidz'><h2>{vidname}</h2><p>{schedule}</p></div>
                            <h4 className='leagueName'>{vidleague}</h4>
                            <h4 className = 'tournament'>{vidtour}</h4>
                            <h4 className = 'gameName'> <span style ={{color : 'var(--tertiary)', fontWeight : "500"}}>Playing</span> {vidgame}</h4>
                            <div className="languages">
                                <p>English: <a href={english}>{english}</a></p>
                                <p>Official: <a href={official}>{official}</a></p>
                            </div>
                         
                        </div>
                        <div className="rightDetails">
                            <a href = {vidstream}>GO TO SOURCE</a>
                        </div>
                       
                    </div>
                    
                
                </div>
                      
                
            }
           
            <div className="streamings">
                <ListVids clickme={clickme} />
            </div>
        </div>
    )
}

export default Watch
