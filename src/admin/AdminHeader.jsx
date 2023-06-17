import { Container, Nav, Navbar,NavLink,Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const AdminHeader = () => {
  return (
    <Navbar collapseOnSelect sticky='top'  bg="light" expand='none' className="bg-opacity-50">
      <Container>
        <Navbar.Brand >
          <Link to='../store' className=' my-0'>
            <img src={ logo } className='my-0' alt="" width={100}/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg'/>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-$'lg'`}
          aria-labelledby={`offcanvasNavbarLabel-expand-$'lg'`}
          placement="start"
          className='bg-light-subtle'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Dashboard</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink eventKey={1}>
                <Link to='./' className=' nav-link text-light-emphasis'>Products</Link>
              </NavLink>
              <NavLink eventKey={1}>
                <Link to='./orders' className=' nav-link text-light-emphasis'>Orders</Link>
              </NavLink>
              <NavLink eventKey={1}>
                <Link to='./new-product' className=' nav-link text-light-emphasis'>Create Product</Link>
              </NavLink>
              <NavLink eventKey={1}>
                <Link to='../login' className=' nav-link text-light-emphasis'>Logout</Link>
              </NavLink>
            </Nav>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default AdminHeader
