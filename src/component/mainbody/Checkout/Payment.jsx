import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Review from './Review.jsx';
import Commerce from '@chec/commerce.js';
import './Payment.css'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { set } from 'react-hook-form';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51Il7HdSAurcf1JFXybmsQGsf5P61syzD5DdlNscNBii5O3W9wnLRbEh1xP5vzDMLm1dPDept9l4UYdTwyoeknDno00UBvzL0TZ')

const Payment = ({ check, checkoutLineItems, payref, shippingmethods, fname, lname, postalcode, address, email, city, reviewCart, checkoutTokenId }) => {
    const keypress = useRef()
    const [errMsg, seterrMsg] = useState('')
    const [success, setsuccess] = useState(false)
    const [msgShow, setmsgShow] = useState(false)
    const [Order, setOrder] = useState([])
    const [error, seterror] = useState([])
    const [counter, setcounter] = useState(0)
    const history = useHistory()
    const commerce = new Commerce(
        'pk_test_242667fce9aeca8fc601cd4ad01b9fffd9d3ca0c0a536'); 
    

    const refresh = async () => {
        const refreshed = await commerce.cart.empty()

    }

     const handlePayment = async (Id, newOrder) => {
        
            const incomingOrder = await commerce.checkout.capture(Id, newOrder)
            setOrder(incomingOrder)
            refresh()
            console.log('success')
        
      /*  catch(error){
            seterror(error.data.error.message)
            console.log(error)
        }*/
   
    }

    const submitpay = async (event, elements, stripe) => {
        event.preventDefault()


        if(!stripe || !elements) return

        const cardElem = elements.getElement(CardElement)

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type : 'card', card : cardElem })

        if(error){
            seterrMsg(error.message)
            setmsgShow(true)
            setTimeout(() => {
                setmsgShow(false)
            }, 3000);
        }



        else{
           /* const orderData = {
                line_items : checkoutLineItems,
                customer : {
                    firstname : fname,
                    lastname : lname,
                    email : email,
                    
                },
                shipping : {
                    name : 'primary',
                    street : address,
                    city : city,
                    postalcode : postalcode,
                    country : "IN",
                    state : 'AS',
                    currency : 'inr'
                },

                description : 'Test',

                payment : {
                    gateway : 'stripe',
                    stripe : {
                        payment_method_id : paymentMethod.id
                    },
                    
                },

                fulfillment : {
                    shipping_method : 'digital',
                    description: "$5 for 5 credits"
                },

                /*shipping : {
                    
                }*/
                history.push('/confirmation')
                refresh()
            }

           /* handlePayment(checkoutTokenId, orderData)*/

        console.log('succ')
        /*setsuccess(true)*/
       

    }

    const pay = (e) => {
        e.preventDefault()
        console.log('redirecting...')
    }

    let sho = (e) => {
        /*setcounter(() => counter + 1)
        console.log(counter)*/
       /*let error = document.getElementById('card-errors');*/
 
    }


      return(
         <div className="payReview">
             <h3>Review & Payment</h3>
             <div className="review">
                 {
                     reviewCart.length > 0 ?
                     reviewCart.map(rc => (
                        <div className="productName">
                            <div className="prods">
                                <h3>{rc.name}</h3>
                                <p>Quantity : {rc.quantity}</p>
                            </div>
                            <div className="pricings">
                                <h3>{rc.price.formatted_with_symbol}</h3>
                            </div>
                        </div>
                     )) : <p className='fetch'>Fetching data... Please wait</p>
                 }

             </div>

             <div className="creditcard">
                 <Elements stripe = {stripePromise}>
                     <ElementsConsumer>
                         {
                             ({ elements, stripe }) => (
                                  /*<form onSubmit = {(e) => pay(e)}>*/
                                 <form onSubmit = {(e) => submitpay(e, elements, stripe)}>
                                
                                    <CardElement ref= {keypress} style = {{ height : '150px', margin : '1em'}} className = 'cardEle' />
                                    <button ref={payref} type='submit' onClick ={() => check(success)} className= 'sub'>Submit</button>
                                    <h3 className={msgShow ? "errorMessage errMsgShow" : 'errorMessage'}><i class="fas fa-exclamation-circle fa-2x"></i> &nbsp; {errMsg}</h3>
                                 </form>
                             )
                         }
                     </ElementsConsumer>
                 </Elements>
             </div>
         </div>
      )
}

export default Payment
