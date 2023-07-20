import React from 'react'
import useMainContext from '../../hooks/useMainContext';
import Products from './Products';

const Vacine = () =>
{
  const { products } = useMainContext()
  const vacineProducts = products.filter(p => p.category.toLowerCase() === 'vacines')
  return (
    <main className='h-screen'>
      { vacineProducts?.length ? (
        <Products products={vacineProducts} text='Vacines'/>
      ): (
        <div className="h-screen d-flex align-items-center justify-content-center">
          <p className="p-5 shadow-sm border border-success h4 fw-bold text-uppercase rounded w-75 mx-auto text-center">Ops! there is no product to display at the moment</p>
        </div>
      ) }
    </main>
  )
}

export default Vacine
