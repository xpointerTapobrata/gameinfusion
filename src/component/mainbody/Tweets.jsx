import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Tweets.css';

const Tweets = ({ grabNews, getScore }) => {
    const gamespotAPI = 'a0ab89afc2bc2e8f7fdf12a0564240ed0be94b32'
    const ac = new AbortController();
    const signal = ac.signal;

    const [images, setimages] = useState([])
    const [articles, setarticles] = useState([])
    const [reviews, setreviews] = useState([])
    const [date, setdate] = useState('')
    const [lastYear, setlastYear] = useState('')

    const fetchGames = async () => {
        try{
        const res = await fetch(`http://www.gamespot.com/api/image_galleries?format=json&limit=6&filter=publish_date:2021-01-01|2021-05-14&sort=publish_date:desc&api_key=${gamespotAPI}`, {signal : signal})
        const data = await res.json()
        setimages(data.results)
        console.log(images, data)
        }
        catch(error){
            console.log(error)
        }
    }

    const fetchArticles = async () => {
        try{
            const res = await fetch(`http://www.gamespot.com/api/articles?format=json&limit=8&filter=publish_date:2021-01-01|2021-05-14&sort=publish_date:desc&api_key=${gamespotAPI}`, {signal : signal})
            const data = await res.json()
            setarticles(data.results)
            console.log(images, data)
        } 
        catch(err){
            console.log(err)
        }
    }

    const fetchReviews = async () => {
        try{
            const res = await fetch(`http://www.gamespot.com/api/reviews?format=json&limit=8&filter=publish_date:2021-01-01|2021-05-14&sort=publish_date:desc&api_key=${gamespotAPI}`, {signal : signal})
            const data = await res.json()
            setreviews(data.results)
            console.log(images, data)
        }
        catch(err){
            console.log(err)
        }
    }

    const getToday = () => {
        let today = new Date()
        let day = String(today.getUTCDate())
        let month = String(today.getUTCMonth()+1)
        let year = String(today.getUTCFullYear())
        let prevYear = String(today.getUTCFullYear()-1)
        let currentDate = `${year}-${month}-${day}`
        let previousDate = `${prevYear}-${month}-${day}`
        setdate(currentDate)
        setlastYear(previousDate)
    }

    useEffect(() => {
        getToday()
        fetchGames()
        fetchArticles()
        fetchReviews()
        return () => {
            ac.abort()
        }
    }, [])

    return (
        <div className='gamesHub' style ={{ display : 'grid', gridTemplateColumns: '1fr', width: '100%', overflowY : 'scroll'}}>
            <div className="cover">
                <div className="leftCover">
                    {
                         images?.map((img, i) => (
                            i<1 &&
                            <>
                            <div className='fimage'><img src={img.image.original} alt="" height="410px" width="770px"/></div>
                            <div className="overlay"></div>
                            <div className="headline"><h3>{img.title}</h3></div>
                            </>
                         ))
                    }
                </div>
                <div className="rightCover">
                    {
                        images?.map((img, i) => (
                            i===1 &&
                            <>
                            <img src={img.image.original} alt="" height="410px" width="520px" />
                            <div className="rightOverlay"></div>
                            <div style={{transform: "translateX(-5%)", width : "40%"}} className="headline"><h3>{img.title}</h3></div>
                            </>
                        ))
                    }
                </div>
            </div>
            <div className="fourImage">
                {
                    images?.map((img, i) => (
                        i>1 &&
                        <img src={img.image.original} alt = "" height = "200px" width = "300px" />
                    ))
                }
            </div>
            
            <div className="tabName" style = {{display : 'grid', marginTop : "25px", gridTemplateColumns: '2fr 1fr', alignItems: 'center', width : "100%", height : "70px", color: "var(--primary"}}>
                <h3 style = {{paddingLeft: "65px", fontSize : "1.4em"}}>News</h3>
                <h3 style = {{fontSize : "1.4em"}}>Reviews</h3>
            </div>
           
            <div className="artsReview" style={{display:'grid', gridTemplateColumns: '2fr 1fr'}}>
                <div className="articles">
                    {
                    articles?.map(arts => (
                        arts.deck.length < 200 &&
                        <NavLink exact to='/news' className= "article" onClick = {() => grabNews(arts)}>
                            <img src={arts.image.square_tiny} alt=""height = '140px' width = '190px'/>
                            <div className="infos">
                                <h3>{arts.title}</h3>
                                <p>{arts.deck}</p>
                            </div>
                        </NavLink>
                    ))
                    }
                </div>
                <div className="reviews">
                    {
                    reviews?.map(rev => (
                        <NavLink exact to = '/score' className="rev" onClick = {() => getScore(rev)}>
                            <img src={rev.image.square_tiny} alt="" height='100px' width = '130px' />
                            <div className="desc">
                                <h3>{rev.title}</h3>
                                <p>{rev.publish_date}</p>
                            </div>
                            <div className="score" style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'scale(1.2)'}}>
                                <h5 style = {{color : 'var(--primary)', marginBottom: '5px'}}>Score</h5>
                                <h4 className= {rev.score < 4 ? "red scoreCircle" : rev.score < 7 ? "yellow scoreCircle" : "green scoreCircle"}>{rev.score}</h4>
                            </div>
                        </NavLink>
                    ))
             

                    }
                </div>
            </div>
        </div>
    )
}

export default Tweets
