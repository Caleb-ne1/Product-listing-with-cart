import React, { useState, useEffect } from 'react'
import './DessertsList.css'
import DessertList from '../Data/dessertList.json'
import Cart from '../Data/cart.json'
import { FaCartArrowDown } from "react-icons/fa6";


export function Desserts() {

    const [deserts, setDesert] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setDesert(DessertList);
        setCart(Cart)
    }, []);

    const addToCart = (desert) => {
        const updateCart = [...cart, desert];
        setCart(updateCart);
        console.log(updateCart)
    };

    return (
        DessertList.map(dessert => {
            return (
                <div className='dessertList'>
                    <div className='Desserts-container'>
                        <div className='container'>
                            <img src={dessert.image} className='dessert-image' />
                            <button onClick={addToCart}><span className='cart-icon'><FaCartArrowDown /></span>Add to cart</button>
                        </div>
                        <div>
                            <p className='category'>{dessert.category}</p>
                            <p className='dessert-name'>{dessert.name}</p>
                            <p className='price'>${dessert.price}</p>
                        </div>
                    </div>
                </div>
            )
        })
    )
}
