import React from 'react';
import './BannerInfo.css';

const BannerInfo = ({ ban, vID, chanID }) => {
    return (
        <div className='bannerinfo'>
            <h3>{ban.snippet.title}</h3>
            <p>{ban.snippet.channelTitle}</p>
            
            <div className='watchButton'><a href = {`https://www.youtube.com/watch?v=${vID}_channel=${chanID}`} alt = ''><button>Watch on YT</button></a></div>
        </div>
    )
}

export default BannerInfo
