import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../assets/mission.jpg'
import img2 from '../../assets/vision.jpg'

const Mission = () => {
  return (
    <div className='vh-100 d-flex align-items-center bg-light-subtle'>
      <Container>
        <Row className='py-5'>
          <div>
            <p className="h2 w-75 mx-auto text-uppercase text-center">our vision</p>
            <hr className="w-25 mx-auto" />
          </div>
          <Col xs={ 10 } md={ 4 }>
            <img src={ img1 } className='img-fluid rounded shadow-sm' alt="" />
          </Col>
          <Col className='my-auto' xs={10} md={8}>
            <p className="h6 text-muted">Our vision to provide veterinary and management know- how for the poultry industry in Nigeria. Our target is to serve as a one-stop-source which provides the best solutions to poultry farmers in Nigeria. 
            With the trust we've established with them via the usage of our products, to be recognized as a valuable partner by our customers.
            </p>
          </Col>
        </Row>
        <Row>
          <div>
            <p className="h2 w-75 mx-auto text-uppercase text-center">our mission</p>
            <hr className="w-25 mx-auto" />
          </div>
          <Col xs={ 10 } md={ 4 } className='my-auto'>
            <img src={ img2 } className='img-fluid rounded shadow-sm' alt="" />
          </Col>
          <Col className='my-auto' xs={10} md={8}>
            <p className="h6 text-muted">
              To make veterinary pharmaceuticals and services accessible to all via internet.
            </p>
            <p>
              To provide quality products and services
            </p>
            <p>
              To render professional advice on poultry farming
            </p>
            <p>
              To Render Veterinary consultations to poultry farmers
            </p>
            <p>
              To make delivery of products (veterinary pharmaceuticals and poultry birds) throughout the country
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Mission
