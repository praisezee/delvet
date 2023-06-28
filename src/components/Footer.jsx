// The component holdinng the footer
import { Link } from "react-router-dom";
import {BsFacebook, BsGithub, BsGoogle, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="container my-5">
      <footer className="text-center " >
        <Container className="container-fluid">
          <section className="mt-5">
            <Row className="text-center d-flex justify-content-center pt-5">
              <Col xs={3}>
                <h6 className="text-uppercase font-weight-bold">
                  <Link to='../' className='link-success'>Home</Link>
                </h6>
              </Col>
              <Col xs={3}>
                <h6 className="text-uppercase font-weight-bold">
                  <Link to='../about' className='link-success'>About</Link>
                </h6>
              </Col>
              <Col xs={3}>
                <h6 className="text-uppercase font-weight-bold">
                  <Link to='../store' className='link-success'>Product</Link>
                </h6>
              </Col>
              <Col xs={3}>
                <h6 className="text-uppercase font-weight-bold">
                  <Link to='../contact' className='link-success'>Contact</Link>
                </h6>
              </Col>
              <Col xs={ 12 } className="mt-3 mb-0">
                {/* The logi behind a user logged in or not */}
                <h6 className="text-uppercase font-weight-bold">
                  <Link to='../login' className='btn btn-outline-success'>Login</Link>
                </h6>
              </Col>

            </Row>
          </section>
          <hr className="my-5" />
          <section className="mb-5">
            <Row className="d-flex justify-content-center">
              <Col lg={8} >
                <p>
                  Integrity- entrepreneurship- excellence - reliability
                </p>
              </Col>
            </Row>
          </section>
          <section className="text-center mb-3">
            <Link className='text-dark mx-4 fs-3'> 
              <BsFacebook/>
            </Link>
            <Link className='text-dark mx-4 fs-3'>
              <BsTwitter/>
            </Link>
            <Link className='text-dark mx-4 fs-3'>
              <BsGoogle/>
            </Link>
            <Link className='text-dark mx-4 fs-3'>
              <BsInstagram/>
            </Link>
            <Link className='text-dark mx-4 fs-3'>
              <BsLinkedin/>
            </Link>
            <Link className='text-dark mx-4 fs-3'>
              <BsGithub/>
            </Link>
          </section>
        </Container>
        <div className="text-center px-3">
          © {year} Copyright:
          <Link to='../' className='link-success'>Delvet.com</Link>
        </div>
      </footer>
    </div>
  )
}

export default Footer
