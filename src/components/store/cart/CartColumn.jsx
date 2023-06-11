import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const CartColumn = () => {
  return (
    <Container fluid className='text-center d-none d-lg-block'>
      <Row>
        <Col xs={ 10 } lg={ 2 } className='mx-auto'>
          <p className="text-uppercase fw-bold">products</p>
        </Col>
        <Col xs={ 10 } lg={ 2 } className='mx-auto'>
          <p className="text-uppercase fw-bold">Name of product</p>
        </Col>
        <Col xs={ 10 } lg={ 2 } className='mx-auto'>
          <p className="text-uppercase fw-bold">price</p>
        </Col>
        <Col xs={ 10 } lg={ 2 } className='mx-auto'>
          <p className="text-uppercase fw-bold">quantity</p>
        </Col>
        <Col xs={ 10 } lg={ 2 } className='mx-auto'>
          <p className="text-uppercase fw-bold">remove</p>
        </Col>
        <Col xs={ 10 } lg={ 2 } className='mx-auto'>
          <p className="text-uppercase fw-bold">total</p>
        </Col>
      </Row>
    </Container>
  )
}

export default CartColumn
