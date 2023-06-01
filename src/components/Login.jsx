import React from 'react'
import { Button, Col, Container, FloatingLabel, FormCheck, FormControl, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='vh-100 d-flex align-items-center'>
      <Container>
        <Row className=' shadow border p-4 rounded mx-auto'>
          <div className='mb-2'>
            <p className="h2 w-75 mx-auto text-center text-uppercase">login</p>
          </div>
          <Col xs={ 10 } md={ 8 } lg={ 6 } className='mx-auto'>
            <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Email">
              <FormControl placeholder='Enter your email address' type='email' className='border border-success'/>
            </FloatingLabel>
            <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Password">
              <FormControl placeholder='Enter your password' type='password' className='border border-success'/>
            </FloatingLabel>
            <div className='d-flex justify-content-between'>
              <div>
                <FormCheck label='Remember me on this device' />
                <p>Don't have an account? Click <Link to='../register' className='link-success'>here</Link> </p>
              </div>
              <div className='my-auto'>
                <Button variant='outline-success'>Login</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
