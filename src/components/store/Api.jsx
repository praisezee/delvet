import React from 'react'
import useMainContext from '../../hooks/useMainContext';
import Products from './Products';

const Api = () =>
{
  const { products } = useMainContext()
  const apiProducts = products.filter(p => p.category.toLowerCase() === 'api')
  return (
    <main className='h-screen'>
      { apiProducts?.length ? (
        <Products products={apiProducts} text='API Drugs'/>
      ): (
        <div className="h-screen d-flex align-items-center justify-content-center">
          <p className="p-5 shadow-sm border border-sucess h4 fw-bold text-uppercase rounded w-75 mx-auto text-center">Ops! there is no product to display at the moment</p>
        </div>
      ) }
    </main>
  )
}

export default Api
