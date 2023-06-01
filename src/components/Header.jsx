import React from 'react'
import { Button,Container, Form, Nav, Navbar,NavLink,Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <Navbar collapseOnSelect fixed='top'  bg="light" expand='lg' className="mb-3 bg-opacity-50">
      <Container>
        <Navbar.Brand >
          <Link to='../' className=' my-0'>
            <img src={ logo } className='my-0' alt="" width={100}/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg'/>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-$'lg'`}
          aria-labelledby={`offcanvasNavbarLabel-expand-$'lg'`}
          placement="end"
          className='bg-dark-subtle'
        >
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink eventKey={1}>
                <Link to='../' className=' nav-link text-light-emphasis'>Home</Link>
              </NavLink>
              <NavLink eventKey={1}>
                <Link to='../about' className=' nav-link text-light-emphasis'>About</Link>
              </NavLink>
              <NavLink eventKey={1}>
                <Link to='../contact' className=' nav-link text-light-emphasis'>Contact</Link>
              </NavLink>
              <NavLink eventKey={1}>
                <Link to='../login' className=' nav-link text-light-emphasis'>Login</Link>
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 border-success"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Header
