// This is the home componet for the store part of the app. first we are checking if we have something in the product array. if not we are just displaying a text to tell users there's no product at the moment. 
//If there exist a product, then we are to display the products component passing the products array as props. 
// The product array is in the context api ceated in this project
import React, { useState } from 'react';
import { StoreProduct } from '../../db/product'
import Products from './Products';

const StoreHome = () =>
{
  const [ products, setProducts ] = useState( StoreProduct )
  return (
    <main className='h-screen'>
      { products.length ? (
        <Products products={products}/>
      ): (
        <div className="h-screen d-flex align-items-center justify-content-center">
          <p className="p-5 shadow-sm border border-sucess h4 fw-bold text-uppercase rounded w-75 mx-auto text-center">Ops! there is no product to display at the moment</p>
        </div>
      ) }
    </main>
  )
}

export default StoreHome
