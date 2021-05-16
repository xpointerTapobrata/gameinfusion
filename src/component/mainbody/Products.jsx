import React from 'react';
import './Products.css'

const Products = ({ commerceItems, label, addtoCart, currentCartButton }) => {

    return (
        <div className={commerceItems < 1 ? 'products' : 'products showProducts'}>
            {
                commerceItems.map((com, index) => {
                    if(index < 1){
                        return(
                            com.categories.map(cats => {
                                if(cats.name === label){
                                    return(
                                        <div className="featured" key= {com.id}>
                                            <div className='featureInfo'>
                                                <h2>{com.name}</h2>
                                                <p>{com.description.replace('<p>', '').replace('</p>','')}</p>
                                                <h4 className='price'><span className={cats.name === 'GAMES' ? 'discount showDiscount' : 'discount'}>11.54% OFF!!&nbsp;</span><span className={cats.name=== 'GAMES' ? 'realPrice showDiscount' : 'realPrice'}>$60.00/-</span>&nbsp; &nbsp;{com.price.formatted_with_symbol}/-</h4>
                                                <button className='featureButton' onClick = {() => addtoCart(com.id, 1)}>ADD TO CART</button>
                                                <div className="icons">Available on : PlayStation®5, &nbsp; PlayStation®4.</div>
                                            </div>
                                            <img className= 'featurePic' src={com.media.source} alt="productimage" height='450px' width='420'/>
                                        </div>
                                    )
                                }
                            })
                        )
                        
                    }
                })
            }
        
            <div className="otherProducts">
            {
            
                commerceItems.map((ci, i) => {
                    if(i>0){
                        return(
                            ci.categories.map(pro => {
                                if(pro.name === label){
                                    return(
                                        <div className="goods" key={ci.id}>
                                            <img src={ci.media.source} alt="productimage" height='250px' width='300px'/>
                                            <h2 className='goodsName'>{ci.name}</h2>
                                            <p className='goodsInfo'>{ci.description.replace('<p>', '').replace('</p>','').replace('<p>','').replace('</p>','')}</p>
                                            <p className='priceLabel'> {ci.price.formatted_with_symbol}/-</p>
                                            <button className={currentCartButton ? 'goodsButton toggleCart' : 'goodsButton'} onClick = {() => addtoCart(ci.id, 1)}>ADD TO CART</button>
                                            
                                        </div>
                                    )
                                }
                            })
                        )
                    }
                })
            }
            </div>
        </div>
    )
}

export default Products
