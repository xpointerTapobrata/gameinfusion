import React from 'react';
import ReactPlayer from 'react-player';

const Player = ({ currentvideoLink, expand }) => {
    return (
        <div className = "player" style = {{ display : 'flex', flexDirection : 'column'}}>
            <div className={ expand ? "videoSec" : "collapsed"}>
               { currentvideoLink && <ReactPlayer className = "screen" controls playing ={expand} height ="1080" width = "1920" url = {`https://www.youtube.com/watch?v=${currentvideoLink.id.videoId}_channel=${currentvideoLink.snippet.channelTitle}`}/>}
            </div>
            
            {
                currentvideoLink &&
                <div className={ expand ? "info" : "collapsed" } style = {{ padding : "20px", flexWrap : "wrap", borderBottom : '1px solid rgb( 69, 69, 69'}}>
                <h2 style = {{ color : 'greenyellow', fontSize : '1.3em', marginBottom: '10px'}}>{currentvideoLink.snippet.title}</h2>
                <h4 style = {{ fontSize : '1.2em', color : 'var(--tertiary)'}}>{currentvideoLink.snippet.channelTitle}</h4>
                </div>
            }
            {
                currentvideoLink &&
                <div className={ expand ? "description" : "collapsed"} style = {{width : '70%', alignSelf: 'flex-start', padding : '20px'}}>
                    <p style = {{border : 'none', color : 'var(--primary)', display : 'flex', textAlign : 'left', justifyContent : 'flex-start', fontSize : '1.05em'}}>{currentvideoLink.snippet.description}</p>
                    <p style = {{color : 'var(--primary)', justifyContent: 'flex-start', border : 'none'}}>Source : &nbsp; <a href = {`https://www.youtube.com/watch?v=${currentvideoLink.id.videoId}_channel=${currentvideoLink.snippet.channelTitle}`} style = {{color:'var(--tertiary)', cursor : 'pointer'}}>{`https://www.youtube.com/watch?v=${currentvideoLink.id.videoId}_channel=${currentvideoLink.snippet.channelTitle}`}</a></p>
                </div>
            }

        </div>
    )
}

export default Player
