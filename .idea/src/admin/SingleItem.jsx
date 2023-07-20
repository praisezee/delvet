import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { BsPencil, BsTrash } from 'react-icons/bs';

const SingleItem = ({product, products, handleEditModal,handleDeleteModal}) => {
  return (
    <Row className='my-1 shadow-sm border rounded py-2'>
      <Col xs={ 2 } className='my-auto text-center'>
        <p className="h6">{products.indexOf(product)+1}</p>
      </Col>
      <Col xs={ 2 } className='my-auto text-center'>
        <p className="h6 text-capitalize">{product.name}</p>
      </Col>
      <Col xs={ 2 } className='my-auto text-center'>
        <p className="h6 text-capitalize">{product.category}</p>
      </Col>
      <Col xs={ 2 } className='my-auto text-center'>
        <p className="h6">{product.price}</p>
      </Col>
      <Col xs={ 2 } className='my-auto text-center'>
        <Button variant='outline-info' onClick={()=>handleEditModal(product.product_id)} ><BsPencil/></Button>
      </Col>
      <Col xs={ 2 } className='my-auto text-center'>
        <Button variant='outline-danger' onClick={()=>handleDeleteModal(product.product_id)} ><BsTrash/></Button>
      </Col>
    </Row>
  )
}

export default SingleItem
