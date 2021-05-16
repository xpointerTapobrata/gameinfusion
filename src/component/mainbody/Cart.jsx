import React from 'react';
import './Cart.css';
import { NavLink } from 'react-router-dom';
import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';
import Commerce from '@chec/commerce.js';

const Cart = ({ carts, getbagID }) => {

    const [bag, setbag] = useState([])
    const [loaded, setloaded] = useState(false)
    
    const commerce = new Commerce(
        'pk_test_242667fce9aeca8fc601cd4ad01b9fffd9d3ca0c0a536'
      );

    const fetchBag = async() => {
        let result = await commerce.cart.retrieve()
       /* let result = await commerce.cart.empty() */
        setbag(result)
        console.log('result', result)
        setloaded(true)
    }

    const emptyCart = async() => {

        let empty = await commerce.cart.empty()
       /* setbag(empty)
        console.log('bag', bag)*/
        fetchBag()
        
    }
    const updateCart = async(productId, quantity) => {
        let updated = await commerce.cart.update(productId, { quantity })
        fetchBag()

    }

    const removeCart = async(productId) => {
        let removed = await commerce.cart.remove(productId)
        fetchBag()
    }

    useEffect(() => {
        fetchBag()
    }, [])

  /*  return(
        <button onClick= {emptyCart}>empty</button>
    )*/

    return (
        <div className='CartItems'>
            <h2>YOUR SHOPPING CART</h2>
            <div className="tableHeads">
                <h3>Product Image</h3>
                <h3>Product Name</h3>
                <h3>Price</h3>
            </div>

            {
                loaded === true ?
                bag.line_items.length < 1 ? <h3 className='emptyMessage'>Your Cart is empty</h3> :
                bag.line_items.map( (ca, i) => {
                    return(
                        <div className="CartItemInfo" key= {ca.id}>
                            <div><img src={ca.media.source} alt="" height='100px' width='120px'/></div>
                            <div className="info">
                                <h3>{ca.name}</h3>
                                
                            </div>
                            <div className="priceInfo">
                               
                                <h3> {ca.line_total.formatted_with_symbol} </h3>
                                <div className="quantity">
                                    <button onClick = {() => updateCart(ca.id, ca.quantity - 1)} className="minus"><i class="fas fa-minus"></i></button>
                                    <div className="amount">{ca.quantity}</div>
                                    <button onClick = {() => updateCart(ca.id, ca.quantity + 1)} className="plus"><i class="fas fa-plus"></i></button>
                                </div>
                                <button onClick = {() => removeCart(ca.id)} className="remove">REMOVE</button>
                                
                            </div>
                        </div>
                    )
                })
                : <h3 className='emptyMessage clear'>Fetching Data... Please Wait</h3>
            }

            {
                loaded === true ?
                <div className="totalInfo">
                   <h3>Total Amount</h3>
                   <h3 className='totAmt'>{bag.subtotal.formatted_with_symbol}</h3>
                </div>
                :<div className = 'totalInfo load'><h3>Total Amount</h3> <h4>Loading</h4> </div>
            }

            <div className="purchase">
                <NavLink exact to = '/home/shop'><button className="addmore">Go Back and Add More</button></NavLink>
                <button className = 'empty' onClick = {emptyCart}>Empty Cart</button>
                <NavLink className='checkout' onClick={() => getbagID(bag)} exact to = '/checkout'>Checkout</NavLink>
            </div>
        </div>
    )
}

export default Cart
