import React from 'react';
import './Mainbody.css';
import Navigation from './Navigation.jsx';
import Body from './Body.jsx';
import Particles from 'react-particles-js';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Watch from './Watch.jsx';
import { Redirect, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Cart from './Cart.jsx';
import Checkoutform from './Checkout/Checkoutform.jsx';
import Commerce from '@chec/commerce.js';
import Confirmation from './Confirmation.jsx';
import { useHistory } from 'react-router-dom';
import Searches from './Searches.jsx';
import News from './News.jsx';
import Score from './Score.jsx';

const commerce = new Commerce(
  'pk_test_242667fce9aeca8fc601cd4ad01b9fffd9d3ca0c0a536'
);


const Mainbody = ({ videocards, bannervideo, trends }) => {

  const [vidLink, setvidLink] = useState([])
  const [vidName, setvidName] = useState([])
  const [league, setleague] = useState([])
  const [tournament, settournament] = useState([])
  const [gamename, setgamename] = useState([])
  const [english, setenglish] = useState([])
  const [official, setofficial] = useState([])
  const [schedule, setschedule] = useState([])
  const [carts, setcarts] = useState([])
  const [bagID, setbagID] = useState('')
  const [bags, setbags] = useState([])
  const [secondTokenID, setsecondTokenID] = useState([])
  const [firstname, setfirstname] = useState('')
  const [secondname, setsecondname] = useState('')
  const [mail, setmail] = useState('')
  const [pcode, setpcode] = useState('')
  const [place, setplace] = useState('')
  const [location, setlocation] = useState('')
  const [totalprice, settotalprice] = useState('')
  const [searches, setsearches] = useState('')
  const [portal, setportal] = useState(false)
  const [image, setimage] = useState([])
  const [news, setnews] = useState([])
  const [score, setscore] = useState([])

  const payref = useRef(null)

  const clickme = (v) => {
      console.log(v.name)
      console.log(v.official_stream_url)
      setvidLink(v.official_stream_url)
      setvidName(v.name)
      setleague(v.league.name)
      settournament(v.tournament.name)
      setgamename(v.videogame.name)
      setenglish(v.streams.english.raw_url)
      setofficial(v.streams.official.raw_url)
      setschedule(v.serie.full_name)
  }

  const pay = (fname, sname, mail, location, place, pcode, total) => {
    payref.current.click()
    setfirstname(fname)
    setsecondname(sname)
    setmail(mail)
    setlocation(location)
    setplace(place)
    setpcode(pcode)
    settotalprice(total)
}

  const generateToken = async(i) => {
    try{
     let token = await commerce.checkout.generateToken(i.id, { type : 'cart' })
     setsecondTokenID(token.id)
     console.log(token)
    }
    catch(error){
 
    }
 }

 const ErrorComp = () => {
    return(
      <div className="error" style ={{ display : "flex", justifyContent : "center" , alignItems : "center", height : "300px", width : "80%", backgroundColor : "rgb(24,24,24)", position : "absolute", bottom : "25%", flexDirection: "column"}}>
        <h2 style = {{ color : "var(--tertiary)"}}>Your cart is empty. Please &nbsp; <NavLink exact to = '/home/shop'><button style={{width : "200px",  borderRadius : "3px", padding : "10px", height : "50px", transform : "translateY(-10%)", backgroundColor : "var(--primary)", backgroundColor : "var(--primary)"}} className=""><p style = {{fontSize : "1.2em", color : "black", fontWeight : "600", border : "none"}}>Go Back and Add More</p></button></NavLink></h2>
      </div>
    )
 }

 let history = useHistory()

 const grabResults =(data) => {
    setsearches(data)
    return history.push('/searchresults')
 }

  const getbagID = (i) => {
    setbagID(i.id)
    setbags(i)
    console.log(bagID)
    generateToken(i)
  }

  const getCart = (c) => {
    setcarts(c)
  }

 const togglePortal = () => {
   setportal(false)
 }

 const captureImage = (e) => {
    setportal(true)
    setimage(e)
 }

 const grabNews = (n) => {
    setnews(n)
 }
 
 const getScore = (s) => {
    setscore(s)
 }

    return (
      <>
        <div className="warning">Sorry, you cannot view this site on mobile yet.</div>
        <div className={portal ? "portal showPortal" : "portal"} style= {{background : `url(${image.link})`, zIndex: '10'}}>
          <div style={{width:'100%', height: '5px', zIndex:'100', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', color: 'var(--primary)', padding: '2em', transform: 'translateY(-10%)', fontSize: '2em', fontWeight: '600'}} className="close"><h5 style = {{cursor: "pointer"}} onClick = {togglePortal}>X</h5></div>
          {
            image &&
          <div className="modal">
             
              <img style ={{pointerEvents : 'none', borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px'}} src={image.link} alt="" height = "528px" width ="836px"/>
              <div className="picinfo" style = {{display: 'grid', gridTemplateColumns: '1fr', height: '30%', padding:'1em'}}>
                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;{image.location}</h3>
                <h4 style = {{marginTop: '10px'}}><i class="fas fa-user"></i>&nbsp;{image.uploader}</h4>
                <p style = {{width :'100%', marginTop : '5px', display: 'flex', justifyContent: 'flex-start', color: 'black'}}><i class="fas fa-calendar" style={{color:'rgb(49,49,49)'}}></i> &nbsp;{image.published}</p>
                <p style={{width :'100%', marginTop : '10px', display: 'flex', justifyContent: 'flex-start', color: 'rgb(90,90,90)'}}> - From Unsplash.com</p>
              </div>
          </div>
          }
        </div>
        <div className={!portal ? 'main showMain' : 'main'}>
            <Navigation grabResults = {grabResults}/>
            <Particles className= 'particles'
            params = {{
                
                    "particles": {
                      "number": {
                        "value": 55,
                        "density": {
                          "enable": true,
                          "value_area": 800
                        }
                      },
                      "color": {
                        "value": "#adff2f"
                      },
                      "shape": {
                        "type": "circle",
                        "stroke": {
                          "width": 2,
                          "color": "#adff2f"
                        },
                        "polygon": {
                          "nb_sides": 5
                        },
                        "image": {
                          "src": "img/github.svg",
                          "width": 100,
                          "height": 500
                        }
                      },
                      "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                          "enable": false,
                          "speed": 1,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                          "enable": false,
                          "speed": 40,
                          "size_min": 0.1,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                      },
                      "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 1200
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                        "onhover": {
                          "enable": true,
                          "mode": "repulse"
                        },
                        "onclick": {
                          "enable": true,
                          "mode": "push"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 400,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 400,
                          "size": 40,
                          "duration": 2,
                          "opacity": 8,
                          "speed": 3
                        },
                        "repulse": {
                          "distance": 200,
                          "duration": 0.4
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                    "retina_detect": true
                
            }} />
              <Switch>
                <Route exact path = '/' render= {() => <Redirect to = '/home' />}/>
                <Route path= '/home' render={()=> <Body className= 'body' clickme ={clickme} grabNews = {grabNews} getScore = {getScore} captureImage = {captureImage} videocards = {videocards} bannervideo = {bannervideo} getCart = {getCart} trends ={trends}/>}/>
                <Route path='/watch' render={() => <Watch clickme={clickme} vidstream = {vidLink} schedule = {schedule} vidname = {vidName} vidleague = {league} vidtour = {tournament} vidgame = {gamename} english ={english} official= {official} />} />
                <Route path = '/cart' render= {() => <Cart carts = {carts} getbagID = {getbagID} />}/>
                { bags.total_items > 0 ? <Route path = '/checkout' render={() => <Checkoutform payref = {payref} pay = {pay} bagID = {bagID} bags = {bags} secondTokenID = {secondTokenID}/>}/> : <Route path ='/checkout' component ={ErrorComp} />}
                <Route path = '/confirmation' render = {() => <Confirmation firstname = {firstname} totalprice = {totalprice} secondname = {secondname} mail ={mail} location={location} place ={place} pcode ={pcode} />}/>
                <Route path = '/searchresults' render ={() => <Searches search = {searches}/>}/>
                <Route path = '/news' render = {() => <News news = {news} />}/>
                <Route path = '/score' render = {() => <Score score = {score} />}/>
              </Switch>
            
            <div className='shadow'></div>
            
        </div>
      </>
    )
}

export default Mainbody
