import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import useProductContext from '../hooks/useProductContext'
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import SingleItem from './SingleItem';

const DashHome = () =>
{
  const {products, loading,handleEditModal,handleDeleteModal} = useProductContext()
  return (
    <Container fluid>
      { loading && !products.length &&
        <div className="vh-75 d-flex justify-content-center align-items-center">
          <Spinner animation='grow'  variant='success'/>
          <Spinner animation='grow'  variant='success' className='mx-2'/>
          <Spinner animation='grow'  variant='success'/>
        </div>
      }
      { !loading && !products.length ?(
        <div  className="vh-75 d-flex justify-content-center align-items-center">
          <p className="text-center h2 p-5 border shadow-sm rounded">No products available. Create a product in the create product tab</p>
        </div> ) : (
          <div className='mt-5 px-2'>
            <p className="text-center h4 fw-bold">All Products</p>
            <hr className='w-25 mx-auto'/>
            <Row>
                <Col xs={ 2 } className='my-auto text-center'>
                  <p className="h5 fw-bold">S/N</p>
                </Col>
                <Col xs={ 2 } className='my-auto text-center'>
                  <p className="h5 fw-bold">Name</p>
                </Col>
                <Col xs={ 2 } className='my-auto text-center'>
                  <p className="h5 fw-bold">Category</p>
                </Col>
                <Col xs={ 2 } className='my-auto text-center'>
                  <p className="h5 fw-bold">Price</p>
                </Col>
                <Col xs={ 2 } className='my-auto text-center'>
                  <p className="h5 fw-bold">Edit</p>
                </Col>
                <Col xs={ 2 } className='my-auto text-center'>
                  <p className="h5 fw-bold">Delete</p>
                </Col>
              </Row>
            { products.map( product => <SingleItem product={product} products={products} handleDeleteModal={handleDeleteModal} handleEditModal={handleEditModal} />)}
          </div>
        )
      }
      <EditModal />
      <DeleteModal/>
    </Container>
  )
}

export default DashHome
