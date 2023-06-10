import React, { useState } from 'react'
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
