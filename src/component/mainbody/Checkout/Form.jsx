import React from 'react';
import './Form.css';
import Commerce from '@chec/commerce.js';
import { useState, useEffect } from 'react';
import FormInput from './CustomTextField.jsx';
import { useForm, FormProvider } from 'react-hook-form';

const Form = ({ checkoutTokenID, submitref, hello, sendShippingAddress, handleFN, handleLN, handleemail, handleaddress, handlecity, handlepostalcode }) => {
    const [shippingCountries, setshippingCountries] = useState([])
    const [fetched, setfetched] = useState(false)
    const methods = useForm()
    const [checktoken, setchecktoken] = useState('')

    const commerce = new Commerce(
        'pk_test_242667fce9aeca8fc601cd4ad01b9fffd9d3ca0c0a536'
    ); 


    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)
        setshippingCountries(countries)
        console.log(countries)
    }

    useEffect(() => {
        setchecktoken(checkoutTokenID)
    }, [])


    useEffect(() => {
        
      /*  fetchShippingCountries(checkoutTokenID)*/
        
    }, [])

    return (
        <div className= 'address'>
            <h3>Shipping Address</h3>
            <FormProvider {...methods}>
            <form className='form' onSubmit={methods.handleSubmit((data) => sendShippingAddress(data))}>
                <div className="leftForm">
                    <h4>First Name</h4>
                    <FormInput name="firstname" label = "First Name" required onchange ={handleFN}/>
                    <h4>Email</h4>
                    <FormInput name="email" label = "Email" required onchange = {handleemail} />
                    <h4>City</h4>
                    <FormInput name="city" label = "City" required onchange = {handlecity}/>
                </div>
                <div className="rightForm">
                    <h4>Last Name</h4>
                    <FormInput name="lastname" label = "Last Name" required onchange ={handleLN}/>
                    <h4>Address</h4>
                    <FormInput name="address" label = "Address" required onchange={handleaddress}/>
                    <h4>Postal Code</h4>
                    <FormInput name="postalcode" label = "Postal Code" required onchange = {handlepostalcode} />
                </div>

                <button className = 'sub' ref = {submitref} type = "submit">Submit</button>
            </form>
            </FormProvider>

           {/* <form className='form'>
                <div className="leftForm">
                    <h4>First Name</h4>
                    <input type="text" label = 'First Name' name= 'firstName' required />
                    <h4>Last Name</h4>
                    <input type="text" label = 'Last Name' name= 'lastName' required />
                    <h4>Email</h4>
                    <input type="text" label = 'Email' name= 'email' required />
                </div>
                <div className="rightForm">
                    <h4>Address</h4>
                    <input type="text" label = 'Address' name= 'address' required />
                    <h4>City</h4>
                    <input type="text" label = 'City' name= 'city' required />
                    <h4>PIN Code</h4>
                    <input type="text" label = 'PIN Code' name= 'pincode' required />
                </div>

                <button className = 'sub' ref = {submitref} type = "submit">Submit</button>
            </form> */ }
        </div>
    )
}

export default Form
