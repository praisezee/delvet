import React from 'react'
import CartItem from './CartItem';
import useMainContext from '../../../hooks/useMainContext'
import { Container } from 'react-bootstrap';

const CartList = () =>
{
  const {cart} = useMainContext()
  return (
    <Container fluid>
      { cart.map( item =>
      (
        <CartItem key={ item.id } item={ item } />
      ))}
    </Container>
  )
}

export default CartList
