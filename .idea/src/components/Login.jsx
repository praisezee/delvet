//This is the login page componet. included is the persistent login enable and disable checkbox
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useMainContext from '../hooks/useMainContext';
import AdminLogin from './AdminLogin';
import ClientLogin from './ClientLogin'

const Login = () =>
{
  const {active, handleAdminActive,handleLoginActive} = useMainContext()
  return (
    <div className='vh-100 d-flex align-items-center'>
      <Container className='shadow border rounded p-3'>
        <Row className='border-bottom p-2 mx-auto mb-2 justify-content-between'>
          <Col xs={ 5 } role='button' onClick={handleLoginActive} className={!active ? 'bg-success text-white rounded text-center py-2': ' rounded text-center py-2' }>
            <p className="text-capitalize h5 my-auto">login as client</p>
          </Col>
          <Col xs={ 5 } role='button' onClick={handleAdminActive} className={!active? ' rounded text-center py-2' :'bg-success text-white rounded text-center py-2'}>
            <p className="text-capitalize h5 my-auto">login as admin</p>
          </Col>
        </Row>
        <Row className=' p-2 rounded mx-auto'>
          <Col>
            { active ?
              <AdminLogin />
              :
              <ClientLogin/>
            }
          </Col>
        </Row>
        
      </Container>
    </div>
  )
}

export default Login
