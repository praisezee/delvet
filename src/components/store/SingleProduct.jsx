//This is the ui design for each single product that was mapped from the parent component. 
import React from 'react';
import { Col, Card, Button } from 'react-bootstrap'
import { BsDash, BsInfoCircle, BsPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import useMainContext from '../../hooks/useMainContext';

const SingleProduct = ( {product,to} ) =>
{
  const {addToCart, increment, decrement} = useMainContext()
  return (
    <Col xs={ 8 } md={ 4 } lg={ 2 } className='mx-auto my-3'>
      <Card className='card'>
        <Card.Body className='img-container'>
          <div
            className='img-container p-3'
          >
            <Link to={to}>
              <img src={ product.src } alt='products' className='card-img-top rounded' />
            </Link>
          </div>
          <p className='h6 text-capitalize'>{ product.name }</p>
          { product.category.toLowerCase() !== 'api' ? 
            <div>
              <p className="h5 fw-bold"> &#8358;{ product.price }</p>
              <>
                { !product.inCart ?
                  (
                    <div className="d-flex justify-content-between">
                      <Button variant='success' onClick={()=>addToCart(product.id)}>Add to cart</Button>
                      <Link to={to}>
                        <BsInfoCircle className='my-auto fs-4' role='button'/>
                      </Link>
                    </div>
                  ) : (
                    <div className='d-flex justify-content-evenly'>
                      <Button variant='outline-danger' onClick={()=> decrement(product.id)} >
                        <BsDash/>
                      </Button>
                      <span className='h6 my-auto'>{ product.count }</span>
                      <Button variant='outline-success' onClick={()=> increment(product.id)}>
                        <BsPlus/>
                      </Button>
                    </div>
                  )
                }
              </>
            </div>
            :
            <div>
              <p className="h5 fw-bold">Contact Us</p>
              <div className="d-flex justify-content-between">
                <Button variant='success'> Book now</Button>
                <Link to={to}>
                  <BsInfoCircle className='my-auto fs-4' role='button'/>
                </Link>
              </div>
            </div>
          }
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleProduct
