import React from 'react';
import './News.css';

const News = ({ news }) => {
    return (
        <div className = 'news'>
            <h2>{news.title}</h2>
            <div className="authorName">
                <h4><span style = {{color:'greenyellow'}}> Author : </span> &nbsp;{news.authors} &nbsp; &nbsp; <span style = {{color:'greenyellow'}}> Published : </span> : {news.publish_date}</h4>
            </div>
            <div className="blog">
                <div className="writing">
                    <p>{news.body.replace('<p>', '')}</p>
                </div>
                <div className="prodImage">
                    <img src={news.image.square_small} alt="" />
                </div>
            </div>
        </div>
    )
}

export default News
