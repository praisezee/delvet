import React from 'react'
import { Container, FormControl, Nav, Navbar,NavLink,Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { BsCart4 } from 'react-icons/bs';
import useMainContext from '../../hooks/useMainContext';

const StoreHeader = () => {
  const {count} = useMainContext()
  return (
    <Navbar collapseOnSelect sticky='top'  bg="light" expand='none' className="bg-opacity-50">
      <Container>
        <Navbar.Brand >
          <Link to='../store' className=' my-0'>
            <img src={ logo } className='my-0' alt="" width={100}/>
          </Link>
        </Navbar.Brand>
        <Link to='../cart' className=' btn ms-auto position-relative btn-outline-success p-2 me-4'>
            <BsCart4 className='fs-4' />
          { count > 0 ? (
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
            {count}
          </span>
          ) : (
              <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-none'>
            {count}
          </span>
            )}
        </Link>
        <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg'/>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-$'lg'`}
          aria-labelledby={`offcanvasNavbarLabel-expand-$'lg'`}
          placement="end"
          className='bg-dark-subtle'
        >
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <div className='my-auto'>
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2 border-success"
                  aria-label="Search"
                />
              </div>
              <NavLink eventKey={1}>
                <Link to='../store' className=' nav-link text-light-emphasis'>All Products</Link>
              </NavLink>
              <NavLink eventKey={1}>
                <Link to='../category/api' className=' nav-link text-light-emphasis'>API Drugs</Link>
              </NavLink>
              <NavLink eventKey={1}>
                <Link to='../category/vacines' className=' nav-link text-light-emphasis'>Vacines</Link>
              </NavLink>
              <NavLink eventKey={1}>
                <Link to='../login' className=' nav-link text-light-emphasis'>Login</Link>
              </NavLink>
            </Nav>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default StoreHeader
