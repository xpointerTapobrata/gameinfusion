import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Confirmation.css';
import Receipt from './Receipt.jsx';
import { Preloader, Puff } from 'react-preloader-icon';
import Pdf from "react-to-pdf";
import { NavLink } from 'react-router-dom';

const Confirmation = ({ firstname, secondname, mail, pcode, place, location, totalprice }) => {
const [showconfirmation, setshowconfirmation] = useState(false)

const ref = useRef()

useEffect(() => {  
    setTimeout(() => {
        setshowconfirmation(true)
    }, 4000);
}, [])

    return (
        <div className="container">
            <div className={!showconfirmation ? "preloader showpreloader" : "preloader"}>
            <Preloader
                use={Puff}
                size={100}
                strokeWidth={14}
                strokeColor="#acff2f"
                duration={1400}
            /> 
            </div>
            <div className= {showconfirmation ? "confirm confirmShow" : "confirm"} style ={{color : "white"}}>
                <h2 className='thankyou'>Payment successful! Thank you {firstname}, for your purchase!</h2>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className = "download" onClick={toPdf}>Download Receipt &nbsp; <i class="fas fa-download"></i></button>}
                </Pdf>
                    
                <Receipt reference ={ref} firstname ={firstname} secondname = {secondname} totalprice = {totalprice} mail ={mail} location={location} place ={place} pcode ={pcode} />
                <NavLink to = '/home' style = {{ display : "flex", justifyContent : "center", alignItems : "center", width : "150px", height : "37px", backgroundColor : "black", color : "white", border : "1px solid greenYellow", marginTop : "10px", borderRadius : "3px", fontWeight : "600", fontSize : "1em"}}>Go to Homepage</NavLink>
                   
            </div>

        </div>
      
    )
}

export default Confirmation
