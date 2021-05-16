import React from 'react';
import './Liveplayers.css';
import { useEffect, useState } from 'react';

const LivePlayers = () => {

    const [liveplayers, setliveplayers] = useState([])
    const [statslive, setstatslive] = useState([])

    let clientID = `ui3zv5forqb6zqbdt8g0j114m8qe9x`
    let clientSecret = `a75gq329nuwbxlbmpluorwbgjs9tx6`

    const ac = new AbortController();
    const signal = ac.signal;
    const YOUTUBE_V3_API_KEY = 'AIzaSyCMOOTLHky3OUtGUIz3dnscl8cVx3_6pNU'
    
    const getlive = async () => {
    let res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&videoCategoryId=20&regionCode=US&maxResults=50&lr=en&relevanceLanguage=en&key=${YOUTUBE_V3_API_KEY}`, {signal : signal});
    let data = await res.json();
    setliveplayers(data.items)
    console.log(liveplayers)
    }

    const getstatslive = async () => {
        let res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=contentDetails&eventType=live&type=video&videoCategoryId=20&regionCode=US&maxResults=50&lr=en&key=${YOUTUBE_V3_API_KEY}`, {signal : signal});
        let stats = await res.json();
        setstatslive(stats)
        console.log(statslive)
    }

    useEffect(() => {
       getlive()
       /* getstatslive()*/
        return () => {
            ac.abort()
        }
    }, [])
    return (
        <div className='liveplayers'>
            
            {
                liveplayers.map(player => {
                    return(
                        player.snippet.title.length < 50 &&
                            
                            <div className="streamer">
                                <img src={player.snippet.thumbnails.medium.url} alt=""/>
                                <div className="streamerinfo">
                                    <h5 className='videoname'>{player.snippet.title}</h5>
                                    <h5>{player.snippet.channelTitle}</h5>
                                    <a href={`https://www.youtube.com/watch?v=${player.id.videoId}_channel=${player.snippet.channelTitle}`}><p>Watch on YouTube &nbsp; <i class="fas fa-external-link-alt"></i></p></a>
                                </div>
                            </div>
                        
                    )
                })
            }
        </div>
    )
}

export default LivePlayers
