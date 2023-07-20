import React from 'react'
import { Button, Col, Container, FloatingLabel,  FormControl, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useMainContext from '../hooks/useMainContext';

const Register = () => {
  const {name,setName,phoneNumber, setPhoneNumber,password, setPassword,success,code, setCode,errMsg,isLoading, verifyEmail,email, setEmail, handleRegister,confirm, setConfirm} = useMainContext()
  return (
    <div className='vh-100 d-flex align-items-center'>
      <Container>
        { success
          ? (
          <>
            <Row>
              <div className='mb-2'>
                <p className="h2 w-75 mx-auto text-center text-uppercase">Verify account</p>
                </div>
                <div role='alert' className={errMsg ? 'alert alert-danger w-75 mx-auto' : 'd-none'} aria-live='assertive'>{ errMsg }</div>
              <Col xs={ 10 } md={ 6 } lg={ 4 } className=' shadow border p-4 rounded mx-auto'>
                <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Verification Code">
                  <FormControl placeholder='Enter verification code sent to your email' type='text' className='border border-success' required value={ code } onChange={(e)=>setCode(e.target.value)} />
                  </FloatingLabel>
                <p className="text-muted h6">Enter the verification code sent to you email address</p>
                <Button variant='success' disabled={isLoading? true: false} onClick={verifyEmail}>
                  { isLoading ? (
                    <>
                      <Spinner size='sm' />
                      verify
                    </>
                  ) : ( <>
                      verify
                  </> ) }
                </Button>
              </Col>
            </Row>
          </>
        ): (
        <>
          <Row className=' shadow border p-4 rounded mx-auto'>
            <div className='mb-2'>
              <p className="h2 w-75 mx-auto text-center text-uppercase">Create an account</p>
            </div>
            <div role='alert' className={errMsg ? 'alert alert-danger w-75 mx-auto' : 'd-none'} aria-live='assertive'>{ errMsg }</div>
            <Col xs={ 12 }>
              <Row>
                <Col xs={ 10 } md={12} className='mx-auto'>
                  <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Fullname">
                    <FormControl placeholder='Enter your fullname' type='text' className='border border-success' required value={name} onChange={(e)=>setName(e.target.value)} />
                  </FloatingLabel>
                </Col>
                <Col xs={ 10 } md={6} className='mx-auto'>
                  <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Email">
                    <FormControl placeholder='Enter your email address' type='email' className='border border-success' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  </FloatingLabel>
                </Col>
                <Col xs={ 10 } md={6} className='mx-auto'>
                  <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Phone Number">
                    <FormControl placeholder='Enter your phone number' type='tel' className='border border-success' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} required/>
                  </FloatingLabel>
                </Col>
                <Col xs={ 10 } md={6} className='mx-auto'>
                  <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Password">
                    <FormControl placeholder='Enter your password' type='password' className='border border-success' value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
                  </FloatingLabel>
                </Col>
                <Col xs={ 10 } md={6} className='mx-auto'>
                  <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Confirm Password">
                    <FormControl placeholder='Enter your password' type='password' className='border border-success' value={confirm} onChange={(e)=>setConfirm(e.target.value)}  required/>
                  </FloatingLabel>
                </Col>
                <div className='d-flex justify-content-between'>
                  <div className='my-auto'>
                    <p>Already have an account? Click <Link to='../login' className='link-success'>here</Link> </p>
                  </div>
                  <div className='my-auto'>
                    <Button disabled={ isLoading ? true : false } variant='outline-success' onClick={ handleRegister }>
                      { isLoading ? (
                        <>
                          <Spinner size='sm' />
                          loading
                        </>
                      ) : (
                        <>
                          Register
                        </> ) }
                    </Button>
                  </div>
                </div>
                </Row>
              </Col>
            </Row >
          </>
        )}
      </Container>
    </div>
  )
}

export default Register
