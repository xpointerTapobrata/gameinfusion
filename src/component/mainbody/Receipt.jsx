import React from 'react';

import './Receipt.css';

const Receipt = ({ reference, firstname, secondname, mail, pcode, place, location, totalprice }) => {

    const date = new Date()

    console.log (date)

    return (
        <div ref={reference} className="receipt">
            <div className="receiptTitle"  style={{transform :"translateY(-4%)", borderBottom : "3px solid var(--primary)", color : "black", paddingRight : "10px", display : "flex", alignItems : "center", width: "100%", flex : "1"}}>
                <h2 style = {{transform :"translateY(4%)", backgroundColor : "var(--primary)", padding : "12px", fontSize : "1.1em", marginLeft :"0px"}}>GAME INFUSION</h2>
                <p style = {{ marginRight : "5px", display : "flex", justifyContent : "flex-end", color : "black", borderRight : "none", fontWeight : "600"}}>Receipt</p>
            </div>

            <div className="second">
                <div className="thankmsg" style = {{padding : "5px 10px"}}>
                    <p style ={{ color : "black", fontWeight : "500", display : "flex", justifyContent : "flex-start", fontSize: "1.2em", height: "40px", alignItems : "center"}}>Thank you {firstname}, for your purchase!</p>
                    <p style = {{ color : "gray", display : "flex", justifyContent : "flex-start", height: "30px", alignItems : "center"}}>Your products will be delivered to you soon.</p>
                </div>
                <div className="customerdetail">
                    
                    <p>{mail}</p>
                    <p>{location}</p>
                    <p>{place} - {pcode}</p>
                </div>
            </div>

            <div className="orderdetails">
                <p style = {{ color : "black", display : "flex", width: "100%", justifyContent: "flex-start", textAlign : "left"}}>Confirmation of your purchase is provided below :</p>
                <div className="heads">
                    <h3>Customer Name</h3>
                    <h3>Total Amount</h3>
                    <h3>Status</h3>
                </div>
                <div className="headData">
                    <p>{firstname} {secondname}</p>
                    <p>{totalprice}</p>
                    <p>Paid &nbsp; <i style = {{ color : "var(--primary)", backgroundColor : "black", borderRadius : "50%"}} class="fas fa-check-circle"></i></p>
                </div>
                
            </div>
         
        </div>
    )
  }

export default Receipt
