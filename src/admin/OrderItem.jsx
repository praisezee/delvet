import React, { useEffect, useState } from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap';
import axios from '../api/axios';

const OrderItem = ( { item, count } ) =>
{
  const [ user, setUser ] = useState( {} )
  const [products,setProducts] = useState([])

  const getUser = async () =>
    {
      try {
        const response = await axios.get( `/auth/${ item.user_id }` )
        setUser(response.data)
      } catch (err) {
        console.error(err)
      }
  }
  const getProduct =  () =>
  {
    const allProducts = JSON.parse( item.products )
    allProducts.map(async item =>
    {
      try {
        const res = await axios.get( `product/${ item.product_id }` )
        const result = res.data
        console.log(result)
      } catch (error) {
        
      }
    })
  }
  useEffect( () =>
  {
    getUser()
    getProduct()
  }, [] )


  return (
    <Container fluid>
      <Row className='shadow-sm my-2 py-2 border rounded'>
        <Col xs={ 1 } className='my-auto text-center'>
          <p className="h5">{ count }</p>
        </Col>
        <Col xs={ 2 } className='my-auto text-center'>
          <p className="h5">{ user?.name }</p>
        </Col>
        <Col xs={ 5 } className='my-auto text-center'>
          
        </Col>
        <Col xs={ 2 } className='my-auto text-center'>
          { item.status.toLowerCase() === 'success' ? (
            <Badge pill bg='success'>Success</Badge>
          ): item.status.toLowerCase() === 'cancelled' ? (
          <Badge pill bg='danger'>Cancelled</Badge>
          ): (<Badge pill bg='warning'>pending</Badge>)}
        </Col>
        <Col xs={ 1 } className='my-auto text-center'>
          <p className="h5">{ count }</p>
        </Col>
        <Col xs={ 1 } className='my-auto text-center'>
          <p className="h5">{ count }</p>
        </Col>
      </Row>
    </Container>
  )
}

export default OrderItem
