import React from 'react'
import { Container, FormControl, Nav, Navbar,NavLink,Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { BsCart4, BsPerson } from 'react-icons/bs';
import useMainContext from '../../hooks/useMainContext';

const StoreHeader = () => {
  const {count, auth} = useMainContext()
  return (
    <Navbar collapseOnSelect sticky='top'  bg="light" expand='none' className="bg-opacity-50">
      <Container fluid className='px-4'>
        <Navbar.Brand >
          <Link to='../store' className=' my-0'>
            <img src={ logo } className='my-0' alt="" width={100}/>
          </Link>
        </Navbar.Brand>
        { !auth.id ?
          <Link to='../login' className=' ms-auto btn btn-success rounded-circle me-3'>
            <BsPerson className='fs-4'/>
          </Link> :
          <p className='ms-auto'>{ auth.name }</p>
        }
        <Link to='../cart' className=' btn position-relative btn-outline-success p-2 me-4'>
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
                <Link to='../category/vaccines' className=' nav-link text-light-emphasis'>Vaccines</Link>
              </NavLink>
              <NavLink eventKey={1}>
                <Link to='../category/antibiotics' className=' nav-link text-light-emphasis'>Antibiotics</Link>
              </NavLink>
              <NavLink eventKey={1}>
                <Link to='../category/feeds' className=' nav-link text-light-emphasis'>Feed Additives</Link>
              </NavLink>
              <NavLink eventKey={1}>
                <Link to='../category/poultry' className=' nav-link text-light-emphasis'>Poultry</Link>
              </NavLink>
            </Nav>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default StoreHeader
