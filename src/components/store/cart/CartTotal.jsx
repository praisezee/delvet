import React from 'react'
import useMainContext from '../../../hooks/useMainContext';
import { Button, Col, Container, Row } from 'react-bootstrap';

const CartTotal = () =>
{
  const {cartSubTotal,cartTax,cartTotal, clearAll} = useMainContext()
  return (
    <>
      <Container>
        <Row>
          <Col xs={ 10 } sm={ 8 } className='mt-4 ms-sm-5 ms-md-auto text-capitalize text-end'>
            <Button variant='danger' className='mb-3 text-uppercase px-5' onClick={clearAll}>
              clear cart
            </Button>
            <h5 className='fw-bold'>
              subtotal : &#8358;{cartSubTotal}
            </h5>
            <h5 className='fw-bold'>
              VAT : &#8358;{cartTax}
            </h5>
            <h5 className='fw-bold'>
              total : &#8358;{cartTotal}
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CartTotal
