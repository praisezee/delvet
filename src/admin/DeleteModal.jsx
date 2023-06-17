import React from 'react'
import { Button, Col, FormControl, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'react-bootstrap';
import useProductContext from '../hooks/useProductContext';

const DeleteModal = () =>
{
  const {name,handleDelete,deleteModal,deleteText,setDeleteText,id,handleDeleteClose} = useProductContext()
  const text =`drop the product ${ name }`
  return (
    <Modal show={deleteModal} onHide={handleDeleteClose}>
      <ModalHeader closeButton>
        <p className="h5 text-center text-capitalize">Delete Product</p>
      </ModalHeader>
      <ModalBody>
        <Row>
          <p>Are you sure you want to delete { name } item? If yes enter the text <span>drop the product { name }</span> </p>
          <FormControl value={deleteText} onChange={(e)=>setDeleteText(e.target.value)} />
        </Row>
      </ModalBody>
      <ModalFooter>
        <Col xs={ 12 } className='mx-auto text-end mt-3'>
          <Button variant='danger' disabled={deleteText.toLowerCase() !== text.toLowerCase() ? true : false} onClick={()=>handleDelete(id)} >Delete</Button>
        </Col>
      </ModalFooter>
    </Modal>
  )
}

export default DeleteModal
