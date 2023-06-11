//This is the componebt that handels the product if there ar product in the array or not
import React from 'react';
import {Container, Row} from 'react-bootstrap'
import SingleProduct from './SingleProduct';

const Products = ( { products, text } ) =>
{
  return (
    <Container fluid>
      <Row>
        <>
          <div className='my-3'>
            <p className="h3 fw-bold text-uppercase w-50 mx-auto text-center ">{ text }</p>
            <hr className="w-25 mx-auto" />
          </div>
          { products.map( product => (
            <SingleProduct key={product.id} product={product} to={`../store/${product.id}`} />
          ) ) }
        </>
      </Row>
    </Container>
  )
}

export default Products
