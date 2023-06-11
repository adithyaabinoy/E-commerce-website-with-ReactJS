import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import { CardElement } from "@stripe/react-stripe-js"


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    const handleChange = event => {};
        
  return (
    <div className='payment'>
        <div className='payment__container'>

            <h1>
                Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                    )
            </h1>

            {/* Payment section - delivery address */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 ReactLane</p>
                    <p>Kerala,India</p>
                </div>
            </div>

            {/* Payment section - Review items */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            {/* Payment section - Payment method */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    {/* Stripe */}

                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />

                        <div className='payment__priceContainer'>
                            <CurrencyFormat
                               renderText={(value) => <h3>Order Total :{value}</h3>}
                               decimalScale={2}
                               value={getBasketTotal(basket)}
                               displayType={"text"}
                               // thousandSeparator={true}
                               prefix={"₹"}
                            />
                           <button>Buy Now</button>
                           </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


  );
}

export default Payment;