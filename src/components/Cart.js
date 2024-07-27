import React from 'react'
import './cart.css'
import emptyCartImage from "../assets/emptyCart.png"

export function Cart() {
  return (
    <div className='cart-container'>
      <h1 className='cart-title'>Your Cart(0)</h1>
      <div className='empty-cart'>
        <img src={emptyCartImage} />
        <p>Your added items will appear here</p>
      </div>
    </div>
  )
}
