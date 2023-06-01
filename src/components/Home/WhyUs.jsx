import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';

const WhyUs = () => {
  return (
    <div className="d-flex align-items-center">
      <Container>
        <Row>
          <div>
            <p className="h2 w-75 mx-auto text-uppercase text-center">why choose us?</p>
            <hr className="w-25 mx-auto mb-3" />
          </div>
          <Col xs={ 10 } md={ 6 } className='p-3 mx-auto'>
            <Card className='shadow'>
              <Card.Body>
                <p className="h5 text-center mb-4 text-uppercase">flexible solutions</p>
                <p className="h6 text-center">Our products are very adaptable and customer-oriented.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={ 10 } md={ 6 } className='p-3 mx-auto'>
            <Card className='shadow'>
              <Card.Body>
                <p className="h5 text-center mb-4 text-uppercase">Experience</p>
                <p className="h6 text-center">Our nearly two decades of expertise make us the finest in the sector.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={ 10 } md={ 6 } className='p-3 mx-auto'>
            <Card className='shadow'>
              <Card.Body>
                <p className="h5 text-center mb-4 text-uppercase">High-quality Products</p>
                <p className="h6 text-center">Our enthusiasm and taste for high-quality, unique products are unmatched.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={ 10 } md={ 6 } className='p-3 mx-auto'>
            <Card className='shadow'>
              <Card.Body>
                <p className="h5 text-center mb-4 text-uppercase">High performance</p>
                <p className="h6 text-center">We are competent people, and we never provide anything less than who we are.
</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WhyUs
