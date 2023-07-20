import React, { useEffect, useState } from 'react'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import axios from '../api/axios';
import OrderProduct from './OrderProduct';
import { BsPencil, BsTrash } from 'react-icons/bs';

const OrderItem = ( { item, count } ) =>
{
  const [ user, setUser ] = useState( {} )
  const [ products, setProducts ] = useState( JSON.parse(item.products) )
  //state for edit and delete order
  const [ editOrderModal, setEditOrderModal ] = useState( false )
  const [deleteOrderModal,setDeleteOrderModal] = useState(false)

  //begining of order functions

  const showEditOrderModal = () =>
  {
    setEditOrderModal(true)
  }
  const showDeleteOrderModal = () =>
  {
    setDeleteOrderModal(true)
  }


  //end of order functions
  

  const getUser = async () =>
    {
      try {
        const response = await axios.get( `/auth/${ item.user_id }` )
        setUser( response.data )
      } catch (err) {
        console.error(err)
      }
  }
  useEffect( () =>
  {
    getUser()
  }, [] )
  return (
    <Container fluid>
      <Row className='shadow-sm my-2 py-2 border rounded g-3'>
        <Col xs={ 1 } className='my-auto text-center'>
          <p>{ count }</p>
        </Col>
        <Col xs={ 2 } className='my-auto text-center'>
          <p>{ user?.name }</p>
        </Col>
        <Col xs={ 5 } className='my-auto text-center'>
          { products.map( item =>
          {
            return <OrderProduct item={item}/>
          } ) }
        </Col>
        <Col xs={ 1 } className='my-auto text-center'>
          <p className='text-capitalize'>{ item.address }</p>
        </Col>
        <Col xs={ 1 } className='my-auto text-center'>
          { item.status.toLowerCase() === 'success' ? (
            <Badge pill bg='success'>Success</Badge>
          ): item.status.toLowerCase() === 'cancelled' ? (
          <Badge pill bg='danger'>Cancelled</Badge>
          ): (<Badge pill bg='warning'>pending</Badge>)}
        </Col>
        <Col xs={ 1 } className='my-auto text-center'>
          <Button variant='outline-info' className='mx-1'>
            <BsPencil/>
          </Button>
        </Col>
        <Col xs={ 1 } className='my-auto text-center'>
          <Button variant='outline-danger' className='mx-1'>
            <BsTrash/>
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default OrderItem
