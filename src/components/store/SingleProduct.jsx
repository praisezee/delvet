import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import { BsInfoCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const SingleProduct = ( {product} ) =>
{
  return (
    <Col xs={ 10 } md={ 4 } lg={ 2 } className='justify-content-evenly'>
      <Card className='m-2'>
        <Card.Body>
          <img src={ product.src } alt='products' className='img-top w-100 rounded ' />
          <p className='h6 text-capitalize'>{ product.name }</p>
          { product.category.toLowerCase() !== 'api' ? 
            <div>
              <p className="h5 fw-bold">{ product.price }</p>
              <div className="d-flex justify-content-between">
                <Button variant='success'>Add to cart</Button>
                <Link to={`../store/${product.id}`}>
                  <BsInfoCircle className='my-auto fs-4' role='button'/>
                </Link>
              </div>
            </div>
            :
            <div>
              <p className="h5 fw-bold">Contact Us</p>
              <div className="d-flex justify-content-between">
                <Button variant='success'>Book now</Button>
                <Link to={`../store/${product.id}`}>
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
