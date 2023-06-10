import React from 'react'
import {Container, Row} from 'react-bootstrap'
import SingleProduct from './SingleProduct';

const Products = ( { products } ) =>
{
  return (
    <Container fluid>
      <Row>
        <>
          <div className='my-3'>
            <p className="h3 fw-bold text-uppercase w-50 mx-auto text-center ">Our product</p>
            <hr className="w-25 mx-auto" />
          </div>
          { products.map( product => (
            <SingleProduct product={product}/>
          ) ) }
        </>
      </Row>
    </Container>
  )
}

export default Products
