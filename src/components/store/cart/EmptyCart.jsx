import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const EmptyCart = () => {
  return (
    <Container className='vh-100 d-flex align-items-center '>
      <Row className='flex-grow-1'>
        <Col xs={ 10 } className='mx-auto text-center fw-bold shadow rounded border border-success p-5'>
          <p className="h1">Your cart is currently empty</p>
        </Col>
      </Row>
    </Container>
  )
}

export default EmptyCart