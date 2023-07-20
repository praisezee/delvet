import { Button, Col, Container, FloatingLabel, FormCheck, FormControl, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useMainContext from '../hooks/useMainContext';

const ClientLogin = () => {
  const {errMsg,email,setEmail,password, setPassword, handleLogin, isLoading} = useMainContext()
  return (
      <Container>
        <Row>
          <div className='mb-2'>
            <p className="h2 w-75 mx-auto text-center text-uppercase">Client login</p>
          </div>
          <div role='alert' className={errMsg ? 'alert alert-danger w-75 mx-auto' : 'd-none'} aria-live='assertive'>{ errMsg }</div>
          <Col xs={ 10 } md={ 8 } lg={ 6 } className='mx-auto'>
            <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Email">
              <FormControl placeholder='Enter your email address' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='border border-success'/>
            </FloatingLabel>
            <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Password">
              <FormControl placeholder='Enter your password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='border border-success'/>
            </FloatingLabel>
            <div className='d-flex justify-content-between'>
              <div>
                <FormCheck label='Remember me on this device' />
                <p>Don't have an account? Click <Link to='../register' className='link-success'>here</Link> </p>
              </div>
              <div className='my-auto'>
                <Button disabled={ isLoading ? true : false } variant='outline-success' onClick={ handleLogin } >
                  { isLoading ? (
                        <>
                          <Spinner size='sm' className='me-1'/>
                          loading
                        </>
                      ) : (
                        <>
                          Login
                        </> ) }
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default ClientLogin
