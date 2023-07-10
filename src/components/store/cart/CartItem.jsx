import React from 'react'
import useMainContext from '../../../hooks/useMainContext';
import { Button, Col, Row } from 'react-bootstrap';
import { BsDash, BsPlus, BsTrash} from 'react-icons/bs'

const CartItem = ( { item } ) =>
{
  const {increment, decrement, deleteItem} = useMainContext()
  return (
    <Row className='my-3 mx-3 text-capitalize text-center border shadow-sm'>
      <Col xs={ 10 } lg={ 2 } className='mx-auto my-auto'>
        <img src={ item.src } style={ { width: "5rem", height: "5rem" } } className='img-fluid' alt={ item.name } />
      </Col>
      <Col xs={ 10 } lg={ 2 } className='mx-auto fw-bold text-capitalize my-auto'>
        <span className="d-lg-none">Product:</span> {item.name}
      </Col>
      <Col xs={ 10 } lg={ 2 } className='mx-auto fw-bold text-capitalize my-auto'>
        <span className="d-lg-none">Price:</span> &#8358;{item.price}
      </Col>
      <Col xs={ 10 } lg={ 2 } className='mx-auto fw-bold text-capitalize my-auto'>
        <div className="d-flex justify-content-center">
          <Button variant='outline-danger' onClick={()=> decrement(item.product_id)}>
            <BsDash/>
          </Button>
          <span className='h4 my-auto mx-3'>{ item.count }</span>
          <Button variant='outline-success' onClick={()=> increment(item.product_id)}>
            <BsPlus />
          </Button>
        </div>
      </Col>
      <Col xs={ 10 } lg={ 2 } className='mx-auto fw-bold text-capitalize my-auto'>
        <Button variant='outline-warning' onClick={()=> deleteItem(item.product_id)}>
          <BsTrash className='fs-5'/>
        </Button>
      </Col>
      <Col xs={ 10 } lg={ 2 } className='mx-auto fw-bold text-capitalize my-auto'>
        <p>total: &#8358;{item.total}</p> 
      </Col>
    </Row>
  )
}

export default CartItem
