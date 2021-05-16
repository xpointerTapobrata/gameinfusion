import React from 'react';
import { useState,useEffect } from 'react';
import './Searches.css';
import ReactPaginate from 'react-paginate';
import ReactPlayer from 'react-player';
import Player from './Player.jsx';

const Searches = ({ search }) => {
    const [searchResult, setsearchResult] = useState([])
    const [expand, setexpand] = useState(false)
    const [currentvideoLink, setcurrentvideoLink] = useState('')
    const [searches, setsearches] = useState(search)

    const YOUTUBE_V3_API_KEY = 'AIzaSyCMOOTLHky3OUtGUIz3dnscl8cVx3_6pNU'
    const ac = new AbortController();
    const signal = ac.signal;

    const fetchSearch = async () => {
        let res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&q=${search}&type=video&videoCategoryId=20&regionCode=US&maxResults=10&lr=en&relevanceLanguage=en&key=${YOUTUBE_V3_API_KEY}`, {signal : signal});
        
        let { items } = await res.json()
        setsearchResult(items)
        console.log(items)
        console.log('sr', searchResult)
    }

    useEffect(() => {
        fetchSearch()
        return () => {
            ac.abort()
        }
    }, [search])

    const ckii = () => {
        setexpand(!expand)
    }

    const getVideo = (x) => {
        setcurrentvideoLink(x)
        setexpand(true)
    }

   /* console.log(currentvideo)*/

    return (

        <div className = {expand ? "searches act" : "searches"}>
            {
                
             <Player currentvideoLink = {currentvideoLink} expand = {expand}/>
            /* currentvideoLink && <h1>{currentvideoLink.snippet.title}</h1> */
            }

            <div className="searchResults">
                <div className='srchmsg'><p style ={{border: 'none'}}>Showing results for &nbsp; '{search}'</p></div>
                <div style ={{height:'1px', width : '100%', backgroundColor: 'rgb(39,39,39)'}}></div>
                <button style = {{ width : "120px", height : "30px", display : "flex", justifyContent : "center", alignItems : "center", padding: "6px", fontWeight : "600"}} onClick= {ckii}>Toggle window</button>
                <div className="results">
                    {
                        searchResult.map(i => (
                            <div onClick = {() => getVideo(i)} className={expand ? "cards shrinked" : "cards"}>
                                <div className='leftCard'><img src={i.snippet.thumbnails.high.url} alt="thumbnail"/></div>
                                <div className="rightCard">
                                    <h3>{i.snippet.title}</h3>
                                    <h4>{i.snippet.channelTitle}</h4>
                                    <div style ={{border: 'none'}}><p>{i.snippet.description}</p></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/*
                searchResult ? 
                <div className = "searchResults">
                    {
                        searchResult.map(i => (
                            <h1 style ={{ color : 'white'}}>{i.snippet.title}</h1>
                        ))
                      
                    }
                </div>:
                <h2>Fetching...</h2>
            */ }
        </div>

    )
}

export default Searches
