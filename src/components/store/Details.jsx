// This is a page where the details of each item of the product will be viewed with their description. Users will also be able to add item placed here to their cart except for the API drugs.
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useMainContext from '../../hooks/useMainContext'
import { BsDash, BsPlus } from 'react-icons/bs';
import Category from './Category';
import Missing from '../Missing'

const Details = () =>
{
  const { id } = useParams()
  const { products, addToCart, increment, decrement } = useMainContext();
  const product = products.find( p => p.id.toString() === id )
  return (
    <Container fluid>
      { product ? (
        <>
        <Row className='my-3'>
        <Col xs={ 10 } md={ 6 } lg={ 4 } className='mx-auto my-auto'>
          <img src={product?.src} alt={product?.name} className='img-fluid my-auto rounded shadow-sm' />
        </Col>
        <Col xs={ 10 } md={ 6 } lg={ 8 } className='mx-auto my-auto'>
          <p className="h3 text-uppercase text-center text-success-emphasis fw-bold">{ product?.name }</p>
          <hr className="w-50 mx-auto" />
          <div>
            <p>{ product?.description }</p>
            { product?.category === 'api' ?
              (
                <>
                  <p className=" fw-bold">This product's price will be known based on the quantity wanted.</p>
                  <div className="mx-auto text-center">
                    <Button variant='outline-success'>Contact for Price</Button>
                  </div>
                </>
            ): (
                <>
                  <p className='h4'>{ product?.price }</p>
                  { !product?.inCart ? 
                    (
                      <Button variant='outline-success' onClick={()=>addToCart(product?.id)}>Add to cart</Button>
                    ) : (
                      <div className='d-flex justify-content-evenly'>
                        <Button variant='outline-danger' onClick={()=>decrement(product.id)}>
                          <BsDash className=' fs-1'/>
                        </Button>
                        <span className='h4 my-auto'>{ product?.count }</span>
                        <Button variant='outline-success' onClick={()=>increment(product.id)}>
                          <BsPlus  className=' fs-1'/>
                        </Button>
                      </div>
                    )
                  }
                </>
            )}
          </div>
        </Col>
      </Row>
      <hr className='my-5'/>
      <Row >
        <div className='my-2'>
          <p className="h4 text-center text-uppercase">
            Similar product
          </p>
          <hr className="w-25 mx-auto" />
        </div>
            <Category category={ products.filter( p => p.id.toString() !== id && p.category === product.category )}/> 
          </Row>
        </>
      ) : (
          <Missing/>
      )}
    </Container>
  )
}

export default Details
