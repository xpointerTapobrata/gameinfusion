import React from 'react';
import './Shop.css';
import { useState, useEffect } from 'react';
import Products from './Products.jsx';
import Commerce from '@chec/commerce.js';
import { NavLink } from 'react-router-dom';

const Shop = ({ getCart }) => {

    const [drop, setdrop] = useState(false)
    const [label, setlabel] = useState('GAMES')
    const [toolShow, settoolShow] = useState(false)
    const [commerceItems, setcommerceItems] = useState([])
    const [cart, setcart] = useState({})
  /*  const [currentCartButton, setcurrentCartButton] = useState(true)*/

    const commerce = new Commerce(
        'pk_test_242667fce9aeca8fc601cd4ad01b9fffd9d3ca0c0a536'
      );

    const fetchCommerce = async() => {
        let { data } = await commerce.products.list()
        setcommerceItems(data);
    }
    console.log(commerceItems)

    const fetchCart = async() => {
        let result = await commerce.cart.retrieve()
       /* let result = await commerce.cart.empty() */
        setcart(result)
    }

    const dropit = () => {
        setdrop(!drop)
        console.log(drop)
    }

    const getLabelName = (e) => {
        console.log(e.target.id)
        setlabel(e.target.id)
        setdrop(!drop)
    }

    const showtool = () => {
        settoolShow(!toolShow)
    }


    useEffect(() => {
        fetchCommerce()
        fetchCart()
    }, [])

    
    const addCart = async (productID, quantity, e) => {
        let add = await commerce.cart.add(productID, quantity);
        setcart(add.cart) 
    }

    const testing = () => {
        commerceItems.map( m => {
            m.categories.map(c => {
                (c.name === label) ? console.log('hello') : console.log('no')
            })
            
        })
    }

    console.log(cart)

    return (
        <div className='shop'>
            <div className={commerceItems.length < 1 ? "msg showMessage" : "msg" }>Fetching Data... Please Wait</div>
            <div className={commerceItems.length < 1 ? "ad" : "ad showad"}><h3>Are you excited watching your favourite esports players and streamers play the HOTTEST Games with the COOLEST Gears ? Then why wait ? <span className='grab'>GRAB'EM NOW !!</span></h3></div>
            <div className={commerceItems.length < 1 ? "category" : "category showad"}>
                <h4 className='labelName'>CATEGORIES :</h4>
                <div className="categoryName" onClick={dropit}>
                    <h5>{label}</h5> &nbsp; &nbsp; <i class="fas fa-arrow-down"></i>
                </div>
                <div className={ drop ? 'showOptions options' : 'options'}>
                    <h5 onClick={getLabelName} id ='GAMES'>GAMES</h5>
                    <h5 onClick={getLabelName} id ='GAME PASS'>GAME PASS</h5>
                    <h5 onClick={getLabelName} id ='GEARS'>GEARS</h5>
                </div>
                <div onClick ={() => getCart(cart)} className="cart"><NavLink exact to = '/cart' className="cartbutton" onMouseEnter={showtool} onMouseLeave={showtool}><i class="fas fa-shopping-cart"></i></NavLink></div>
                <div className={ toolShow ? "tool toolShow" : 'tool' }>Cart</div>
                <div className={cart.total_unique_items > 0 ? "badge badgeDisplay" : 'badge'}>{cart.total_unique_items}</div>
            </div>
            <Products commerceItems = {commerceItems} addtoCart = {addCart} label={label}/>            
        </div>
    )
}

export default Shop
