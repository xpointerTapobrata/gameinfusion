import React, { createRef } from 'react';
import './CheckoutStyle.css';
import { useState, useEffect, useRef } from 'react';
import Form from './Form.jsx';
import Payment from './Payment.jsx';
import Commerce from '@chec/commerce.js';
import { NavLink, useHistory } from 'react-router-dom';

const commerce = new Commerce(
    'pk_test_242667fce9aeca8fc601cd4ad01b9fffd9d3ca0c0a536'
  );

const Checkoutform = ({ bagID, bags, pay, payref }) => {
    const submitref = useRef(null)
    const [shipping, setshipping] = useState(false)
    const [loaded, setloaded] = useState(false)
    const [checkoutToken, setcheckoutToken] = useState([])
    const [shippingData, setshippingData] = useState({})
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [address, setaddress] = useState('')
    const [city, setcity] = useState('')
    const [postalcode, setpostalcode] = useState('')
    const [firstname, setfirstname] = useState('')
    const [secondname, setsecondname] = useState('')
    const [mail, setmail] = useState('')
    const [location, setlocation] = useState('')
    const [place, setplace] = useState('')
    const [pcode, setpcode] = useState('')
    const [reviewCart, setreviewCart] = useState([])
    const [totalprice, settotalprice] = useState('')
    const [shippingmethods, setshippingmethods] = useState([])
    const [checkoutTokenId, setcheckoutTokenId] = useState([])
    const [checkoutLineItems, setcheckoutLineItems] = useState([])
    const [redirect, setredirect] = useState(false)
    
    

    const generateToken = async() => {
       try{
        let token = await commerce.checkout.generateToken(bagID, { type : 'cart' })
        setcheckoutToken(token)
        setshippingmethods(token.shipping_methods)
        setcheckoutTokenId(token.id)
        setcheckoutLineItems(token.live.line_items)
        console.log(token)
       }
       catch(error){
       }
 
    }
    console.log('ct', checkoutToken)

    const fetchReviewCart = async() => {
        let result = await commerce.cart.retrieve()
        await setreviewCart(result.line_items)
        settotalprice(result.subtotal.formatted_with_symbol)
       console.log('previous', result)
    }


const check = (c) => {
    if (c === true){
        setredirect(true)
    }
  }

    console.log('rc',reviewCart)

    const forwardStep = () => {
        submitref.current.click()
    }

    const backStep = () => {
        setshipping(false)
    }

    const hello = (e) => {
        console.log(e)
    }

    const sendShippingAddress = (data) => {
        setfname(data.firstname)
        setlname(data.lastname)
        setemail(data.email)
        setaddress(data.address)
        setcity(data.city)
        setpostalcode(data.postalcode)
        isNameEnabled && setshipping(true)
        fetchReviewCart()
    }

    const handleFN = (e) => {
        console.log('fn', e.target.value)
        setfirstname(e.target.value)
    }


    const handleLN = (e) => {
        console.log('ln', e.target.value)
        setsecondname(e.target.value)
        
    }

    const handleemail = (e) => {
        console.log('ln', e.target.value)
        setmail(e.target.value)
        
    }

    const handleaddress = (e) => {
        console.log('ln', e.target.value)
        setlocation(e.target.value)
        
    }

    const handlecity = (e) => {
        console.log('ln', e.target.value)
        setplace(e.target.value)
        
    }

    const handlepostalcode = (e) => {
        console.log('ln', e.target.value)
        setpcode(e.target.value)
        
    }

    const isNameEnabled = firstname.length > 0 && secondname.length > 0 && mail.length > 0 && location.length > 0 && place.length > 0 && pcode.length > 0
    /*const isEnabled = shippingData.firstname.length > 0 && shippingData.lastname.length > 0*/


  /*  useEffect(() => {
       setloaded(true)
    }, [])*/

    useEffect(() => {
        generateToken()
    }, [])

    return (
        <div className='checkoutpage'>
         
            <h3 className='pageName'>CHECKOUT</h3>
            <div className="stepper">
                <div className="leftlabels">
                    <div className={!shipping ? "addressStep showSteps" : "addressStep"}>1</div>
                    <div className={shipping ? "tickaddress showSteps" : "tickaddress"}><i class="fas fa-check"></i></div>
                    <p className={shipping ? 'firstlabelName coloredLabel' : 'firstlabelName'}>Shipping address</p>
                </div>
                <div className="rightlabels">
                    <p className='lastlabelName'>Payment Details</p>
                    <div className="tickpayment"><i class="fas fa-check"></i></div>
                    <div className={!shipping ? "paymentStepShow paymentStep" : "paymentStep"}>2</div>
                    <div className={shipping ? "paymentStep paymentStepActive" : "paymentStep"}>2</div>
                </div>
            
            </div>
            <div className="lines">
                <div className="line"></div>
                <div className={shipping ? "progressLine progressed" : 'progressLine'}></div>
            </div>

            <div className="pages">
                {

                checkoutToken &&
                <div className={shipping ? "addressForm slideaddress" : "addressForm"}>
                    <Form 
                    checkoutTokenId = {checkoutTokenId} 
                    handleFN = {handleFN} 
                    handleLN = {handleLN}
                    handleemail= {handleemail}
                    handleaddress = {handleaddress}
                    handlecity = {handlecity}
                    handlepostalcode = {handlepostalcode}
                    submitref = {submitref} 
                    hello={hello} 
                    bagID = {bagID}
                    sendShippingAddress = {sendShippingAddress} />
                </div>
                
                }
                <div className={shipping ? "payment slidepayment" : "payment"}>
                <Payment check = {check} checkoutLineItems = {checkoutLineItems} payref = {payref} checkoutTokenId = {checkoutTokenId} shippingmethods = {shippingmethods} fname = {firstname} lname={secondname} city ={location} address = {location} postalcode ={pcode} email ={mail} reviewCart= {reviewCart} />
                </div>
            </div>

            <div className="probuttons">
                <NavLink exact to = '/cart' className ={!shipping ? 'back backtocart' :  'selection'}>Back</NavLink>
                <button className = {!shipping ? 'selection' : 'back'} onClick= {backStep}>Back</button>
                <button className = {shipping ? 'hide' : !isNameEnabled ? 'grayed' : ''} onClick={forwardStep}>Proceed</button>
                <button className = {!shipping ? 'hide' : 'paybutton'} onClick={() => pay(firstname, secondname, mail, location, place, pcode, totalprice)}>Pay {totalprice}</button>
            </div>
        </div>
    )
}

export default Checkoutform
