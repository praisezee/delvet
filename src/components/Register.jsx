import React from 'react'
import { Button, Col, Container, FloatingLabel,  FormControl, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='vh-100 d-flex align-items-center'>
      <Container>
        <Row className=' shadow border p-4 rounded mx-auto'>
          <div className='mb-2'>
            <p className="h2 w-75 mx-auto text-center text-uppercase">Create an account</p>
          </div>
          <Col xs={ 12 }>
            <Row>
              <Col xs={ 10 } md={12} className='mx-auto'>
                <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Fullname">
                  <FormControl placeholder='Enter your fullname' type='text' className='border border-success' required/>
                </FloatingLabel>
              </Col>
              <Col xs={ 10 } md={6} className='mx-auto'>
                <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Email">
                  <FormControl placeholder='Enter your email address' type='email' className='border border-success' required/>
                </FloatingLabel>
              </Col>
              <Col xs={ 10 } md={6} className='mx-auto'>
                <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Phone Number">
                  <FormControl placeholder='Enter your phone number' type='tel' className='border border-success' required/>
                </FloatingLabel>
              </Col>
              <Col xs={ 10 } md={6} className='mx-auto'>
                <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Password">
                  <FormControl placeholder='Enter your password' type='password' className='border border-success' required/>
                </FloatingLabel>
              </Col>
              <Col xs={ 10 } md={6} className='mx-auto'>
                <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Confirm Password">
                  <FormControl placeholder='confirm your password' type='password' className='border border-success' required/>
                </FloatingLabel>
              </Col>
              <div className='d-flex justify-content-between'>
              <div className='my-auto'>
                <p>Don't have an account? Click <Link to='../login' className='link-success'>here</Link> </p>
              </div>
              <div className='my-auto'>
                <Button variant='outline-success'>Register</Button>
              </div>
            </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register
