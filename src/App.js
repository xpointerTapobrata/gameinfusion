import './App.css';
import Mainbody from './component/mainbody/Mainbody.jsx';
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';


function App() {
  
  const [getmostviewed, setgetmostviewed] = useState([])
  const [banners, setbanners] = useState([])
  const [trends, settrends] = useState([])
  const ac = new AbortController();
  const signal = ac.signal;

  const YOUTUBE_V3_API_KEY = 'AIzaSyCMOOTLHky3OUtGUIz3dnscl8cVx3_6pNU'




  async function getdata () {
  try{
    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&statistics&channelType=any&maxResults=8&order=videoCount&q=game&key=${YOUTUBE_V3_API_KEY}`,{signal : signal})
    let data = await res.json()
    /*console.log(data.items)*/
    setgetmostviewed(data.items)
  }
  catch(err){
    console.error(getmostviewed)
  }
}

async function gettrends(){
  try{
    const trends = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=game&maxResults=8&order=relevance&key=${YOUTUBE_V3_API_KEY}`,{signal : signal})
    let trendsdata = await trends.json()
    settrends(trendsdata.items)
    /*console.log(trendsdata)*/
  }
  catch{
    console.error(trends)
  }
}

async function getbanner() {
  try{
    const bannerres = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&q=game&videoCategoryId=20&chart=mostPopular&maxResults=1&key=${YOUTUBE_V3_API_KEY}`,{signal : signal})
    let bannerdata = await bannerres.json();
   /* console.log(bannerdata.items)*/
    setbanners(bannerdata.items)
  }
  catch{
    console.error(banners)
  }
}

useEffect(() => {
    getdata()
   /* gettrends()*/
    getbanner()
    return () => {
      ac.abort()
    }
  }, [])


  return (
    <div className="App">
      <BrowserRouter>
          <Mainbody  videocards = {getmostviewed} bannervideo = {banners} trends={trends}/>
      </BrowserRouter>
        
        <footer><h4>Designed and Developed by</h4><p>Tapobrata Choudhury</p></footer>
    </div>
  );
}

export default App;
