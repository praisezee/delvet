import React from 'react'
import SingleProduct from './SingleProduct';

const Category = ({category}) => {
  return (
    <>
      { category.map( product => (
        <SingleProduct product={product} to={`../${product.id}`}/>
      ))}
    </>
  )
}

export default Category
