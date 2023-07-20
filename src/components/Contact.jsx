// Component holding the contact for and contact details of the company
import { Col, Container, FloatingLabel, Button, Form, FormControl, Row } from 'react-bootstrap';
import useMainContext from '../hooks/useMainContext';

const Contact = () =>
{
  const {firstName,surname,setFirstName,setSurname,phoneNumber,setPhoneNumber,email,setEmail,message,setMessage,handleContact} = useMainContext()
  return (
    <div className='vh-100 d-flex align-items-center'>
      <Container fluid>
        <Row className='g-2'>
          <div>
            <p className="h2 w-75 mx-auto text-center text-uppercase">Contact Us</p>
            <hr className="w-25 mx-auto" />
          </div>
              <p className="h6 text-center text-capitalize fw-bold my-4">For vetinary consultancy services or inquires, fill the form below</p>
          <Col xs={ 12 } md={ 7 }>
            <Form>
              <Row className='g-2'>
                <Col xs={12} md={6} className='mx-auto'>
                  <FloatingLabel controlId='surname' label="Surname">
                    <FormControl
                      placeholder='Enter your surname'
                      type='text'
                      value={ surname }
                      onChange={(e)=>setSurname(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={12} md={6} className='mx-auto'>
                  <FloatingLabel controlId='firstname' label="Firstname">
                    <FormControl
                      placeholder='Enter your surname'
                      type='text'
                      value={ firstName }
                      onChange={(e)=>setFirstName(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={12} md={6} className='mx-auto'>
                  <FloatingLabel controlId='phoneNumber' label="Phone Number">
                    <FormControl
                      placeholder='Enter your phone number'
                      type='tel'
                      value={ phoneNumber }
                      onChange={(e)=>setPhoneNumber(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={12} md={6} className='mx-auto'>
                  <FloatingLabel controlId='email' label="Email">
                    <FormControl
                      placeholder='Enter your email address'
                      type='email'
                      value={ email }
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={ 12 } md={12} className='mx-auto'>
                  <FloatingLabel controlId='message' label="Your Message">
                    <FormControl
                      placeholder='Enter your message'
                      type='text'
                      as='textarea'
                      rows={ 4 }
                      style={ { minHeight: '100px' } }
                      value={ message }
                      onChange={(e)=>setMessage(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={ 12 }  className='text-end'>
                  <Button variant='outline-success' className=' text-capitalize' onClick={handleContact}>send your message</Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col xs={ 12 } md={ 5 } className='my-auto pt-3'>
            <p className='h6 text-capitalize fw-bold'>Visit us at plot 5-10, Abe Koko Street, Opa village, Odo-on kekere, off old Lagos road, ibadan
            </p>
            <p className='h6 text-capitalize fw-bold'>phone number: +234 8095107022, +234 8055114497
            </p>
            <p className='h6 text-capitalize fw-bold'>Email: delvetconsult@gmail.com or delvetpro2004@yahoo.co.uk
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
