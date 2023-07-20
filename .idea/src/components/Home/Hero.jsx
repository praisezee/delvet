import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../assets/bg.jpg'

const Hero = () => {
  return (
    <div className='vh-100 d-flex align-items-center bg-dark-subtle'>
      <Container>
        <Row>
          <Col xs={ 10 } md={ 7 } className='mx-auto text-center'>
            <img src={img} alt="doc" className=' w-100 img-fluid rounded shadow' />
          </Col>
          <Col xs={ 10 } md={ 5 } className='my-auto mx-auto'>
            <p className="h4 text-capitalize text-center">Delvet project limited Veterinary consultants and farmers</p>
            <p className='text-muted text-center'>The leading poultry verterinary practice serving the broiler, layer and point of lay sectors nationwide. 
            Delvet project limited provides a complete poultry veterinary service to meet all the requirements of today’s modern farming practices
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
