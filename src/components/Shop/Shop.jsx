import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../Carts/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([])




    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[]);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart)
    },[])






    const handleAddToCart =(product)=>{

        const newCart = [...cart, product]
        setCart(newCart)

       addToDb(product.id)



        
    }






    return (
        <div className='shop-container'>
            <div className='cart-item'>

                {
                products.map(product=> <Product
                key={product.id}

                product={product}
                handleAddToCart={handleAddToCart}
       
       
                
                ></Product>)
            }

            </div>

            <div className='shop-details'>

                <Cart cart = {cart}></Cart>


 
            

                

            </div>

            
        </div>
    );
};

export default Shop;