import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import img from '../assets/delvet - point of lay.jpg'

const About = () => {
  return (
    <div className='vh-100 d-flex align-items-center'>
      <Container>
        <Row>
          <div>
            <p className="h2 w-75 mx-auto text-center text-uppercase">About Us</p>
            <hr className="w-25 mx-auto" />
          </div>
          <Col xs={ 10 } md={ 5 } className='my-auto text-center'>
            <img src={img} className='img-fluid w-100 rounded shadow' alt="" />
          </Col>
          <Col xs={ 10 } md={ 7 } className='my-auto'>
            <p className="h6">Delvet project imited provides animal health solutions to majorly poultry famers. We have extensive experience in marketing veterinary medicinal products, API’s and nutraceuticals.We also provide provide veterinary consultancy to poultry farmers. We recognize the value of ongoing professional development, making sure that the birds in our care receive the greatest quality of care, and actively participating in the formulation of the most recent veterinarian recommendations. We work to promote optimal management practices while also practicing evidence-based medicine.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
