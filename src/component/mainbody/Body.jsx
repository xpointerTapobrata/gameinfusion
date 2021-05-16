import React from 'react';
import './Body.css';
import BannerInfo from './BannerInfo.jsx';
import ReactPlayer from 'react-player';
import SecondNav from './SecondNav.jsx';
/*import Fields from './Stats.jsx';*/
import LivePlayers from './LivePlayers.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Videos from './Videos.jsx';
import Photos from './Photos.jsx';
import Stats from './Stats.jsx';
import Tweets from './Tweets.jsx';
import Shop from './Shop.jsx';
import { useState, useEffect } from 'react';

const Body = ({ videocards, bannervideo, trends, clickme, getCart, captureImage, grabNews, getScore }) => {
    let url =``
    /*let url2 = `https://www.youtube.com/watch?v=${bannervideo.id}_channel=${bannervideo.snippet.channelTitle}`*/
    const [vID, setvID] = useState('')
    const [chanID, setchanID] = useState('')

    const getvID = () => {
        bannervideo.map( m => (
            setvID(m.id)
        ))
    }

    const getchanID = () => {
        bannervideo.map( m => {
            setchanID(m.snippet.channelTitle)
        })
    }

    useEffect(() => {
        getvID()
        getchanID()
    }, [])
    
    return (
        <div className='body'>
            {
                 bannervideo.map(iter => {
                    url = `https://www.youtube.com/watch?v=${iter.id}_channel=${iter.snippet.channelTitle}`
                })
            }

            <ReactPlayer url ={url} height='50vh' width='75%'  playing muted className='banner' style={{color: 'green'}}/>
            
             
            {
                bannervideo.map(ban => {
                    return <BannerInfo key={ban.id} ban={ban} vID ={vID} chanID = {chanID}/>
                })
            }
            <div className='contents'>
                <div className='left'>
                     <SecondNav />
                     <Switch>
                         <Route exact path='/home' component={Stats} />
                         <Route exact path='/home/photos' render={() => <Photos captureImage = {captureImage}/>} />
                         <Route exact path = '/home/tweets' render={() => <Tweets grabNews = {grabNews} getScore = {getScore}/>} />
                         <Route exact path = '/home/videos' render={() => <Videos clickme={clickme}/>}/>
                         <Route exact path = '/home/shop' render ={() => <Shop getCart = {getCart} />} />
                         
                     </Switch>
                </div>
              
            </div>
           
           
         
        </div>
    )
}

export default Body
