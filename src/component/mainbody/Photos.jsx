import React from 'react';
import './Photos.css';
import { useState, useEffect } from 'react';

const Photos = ({ captureImage }) => {
    const [current, setcurrent] = useState('')
    const [modal, setmodal] = useState(false)
    const photos = [
        {
            id: 0,
            link: 'https://images.unsplash.com/photo-1548003693-b55d51032288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
            uploader: 'Alex Haney',
            location: 'Revo Esports, Spring Hill, United States',
            published: 'January 20, 2019',
        },
        {
            id: 1,
            link: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
            uploader: 'Sean Do',
            location: 'Dallas, United States',
            published: 'August 16, 2018'
        },
        {
            id: 2,
            link: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80',
            uploader: 'Stem List',
            location: 'Crowne Plaza Detroit Downtown Riverfront, Detroit',
            published: 'May 16, 2019'
        },
        {
            id: 3,
            link: 'https://images.unsplash.com/photo-1612151388040-9ec75d2de8c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            uploader: 'Emanuel Ekström',
            location: 'Jönköping, Sverige',
            published: 'February 1, 2021'
        },
        {
            id: 4,
            link: 'https://images.unsplash.com/photo-1511882150382-421056c89033?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
            uploader: 'Carl Raw',
            location: 'New Brighton, Wallasey, UK',
            published: 'November 28, 2017'
        },
        {
            id: 5,
            link: 'https://images.unsplash.com/photo-1548686304-637b8e7c663b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
            uploader: 'Alex Haney',
            location: 'Revo Esports, Spring Hill, US',
            published: 'January 28, 2018'
        },
        {
            id: 6,
            link: 'https://images.unsplash.com/photo-1603810379657-7c147e6406a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80',
            uploader: 'Ella Don',
            location: '1337 Camp',
            published: 'October 27, 2020'
        },
        {
            id: 7,
            link: 'https://images.unsplash.com/photo-1535222636729-76586bf52493?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
            uploader: 'Maik Jonietz',
            location: 'Koelnmesse, Köln, Germany',
            published: 'August 26, 2018'
        },
        {
            id: 8,
            link : 'https://images.unsplash.com/photo-1515295527612-cb8132ecb496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80',
            uploader: 'Sean Do',
            location: 'Frisco, United States',
            published: 'January 7, 2018'
        },
    ]

    const zoom = (e) => {
        setcurrent(e)
    }

    const zoomout = () => {
        setcurrent('')
    }

    return (
        <div className='photos' style = {{ display : "grid", gap: '0px', gridTemplateColumns : "repeat(3, 1fr)", justifyContent: "center", alignItems : "center"}}>
        
            {
                photos.map((photo, k) => (
                    <div className={!modal ? "pic showPic" : "pic"} onClick= {() => captureImage(photo)} key = {photo.id} style = {{ marginLeft : "0px"}}>
                       <div id={photo.id} className={k === current ? "piccontainer zoom" : "piccontainer" }onMouseEnter ={() => zoom(photo.id)} onMouseLeave = {zoomout}>
                            <img src={photo.link} alt="" height ="240px" width = "380px"/>
                            <div style={{display : 'flex', justifyContent: 'center', alignItems: 'center', color : 'white', fontWeight : '600', backgroundColor:'rgb(0, 0, 0, 0.3)'}} className={k === current ? "shade showshade" : "shade"}> CLICK TO VIEW</div>
                       </div>          
                    </div>
                ))
            }
        </div>
    )
}

export default Photos
