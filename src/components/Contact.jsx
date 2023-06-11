// Component holding the contact for and contact details of the company
import { Col, Container, FloatingLabel,Button, Form, FormControl, Row } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className='vh-100 d-flex align-items-center'>
      <Container fluid>
        <Row className='g-2'>
          <div>
            <p className="h2 w-75 mx-auto text-center text-uppercase">Contact Us</p>
            <hr className="w-25 mx-auto" />
          </div>
          <Col xs={ 12 } md={ 7 }>
            <Form>
              <Row className='g-2'>
                <Col xs={12} md={6} className='mx-auto'>
                  <FloatingLabel controlId='floatingInputGrid' label="Surname">
                    <FormControl  placeholder='Enter your surname' type='text'/>
                  </FloatingLabel>
                </Col>
                <Col xs={12} md={6} className='mx-auto'>
                    <FloatingLabel controlId='floatingInputGrid' label="Firstname">
                      <FormControl placeholder='Enter your surname' type='text' />
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} md={6} className='mx-auto'>
                    <FloatingLabel controlId='floatingInputGrid' label="Phone Number">
                      <FormControl placeholder='Enter your phone number' type='tel'  />
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} md={6} className='mx-auto'>
                    <FloatingLabel controlId='floatingInputGrid' label="Email">
                      <FormControl placeholder='Enter your email address' type='email'  />
                    </FloatingLabel>
                  </Col>
                  <Col xs={ 12 } md={12} className='mx-auto'>
                    <FloatingLabel controlId='floatingInputGrid' label="Your Message">
                        <FormControl placeholder='Enter your message' type='text' as='textarea' rows={ 4 } style={ {minHeight: '100px'} } />
                    </FloatingLabel>
                  </Col>
                  <Col xs={ 12 }  className='text-end'>
                    <Button variant='outline-success' className=' text-capitalize'>send your message</Button>
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
