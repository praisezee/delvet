import React from 'react'
import useMainContext from '../../hooks/useMainContext';
import Products from './Products';

const Poultry = () => {
  const { products } = useMainContext()
  const feedAdditives = products.filter(p => p.category.toLowerCase() === 'poultry')
  return (
    <main className='h-screen'>
      { feedAdditives?.length ? (
        <Products products={feedAdditives} text='Poultry Birds'/>
      ): (
        <div className="h-screen d-flex align-items-center justify-content-center">
          <p className="p-5 shadow-sm border border-success h4 fw-bold text-uppercase rounded w-75 mx-auto text-center">
            Ops! there is no product to display at the moment
          </p>
        </div>
      ) }
    </main>
  )
}

export default Poultry
