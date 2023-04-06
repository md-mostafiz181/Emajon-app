import React from 'react';
import Cart from '../components/Carts/Cart';
import { useLoaderData } from 'react-router-dom';
import Product from '../components/Product/Product';
import ReviewItem from '../components/ReviewItem/ReviewItem';

const Order = () => {
    const cart = useLoaderData();
    console.log(cart)


    return (
        <div className='shop-container'>
           <div className='product-container'>
                <h4>this is our order: {cart.length}  </h4>
                {
                    cart.map(product=> <ReviewItem

                        key={product.id}
                        product={product}
                    
                    ></ReviewItem>)
                }
           </div>

           <div className='shop-details'>
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Order;