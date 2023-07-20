import React from 'react'
import useProductContext from '../hooks/useProductContext';
import OrderItem from './OrderItem';

const Orders = () =>
{
  const {order} = useProductContext()
  return (
    <div className='mt-4'>
      <div>
        <p className="h3 fw-bold text-center text-capitalize text-success-emphasis">customer's order</p>
        <hr className="w-25 mx-auto mt-2" />
      </div>
      {order.map(item =>(
        <OrderItem item={ item } count={order.indexOf(item)+1} />
      ))}
    </div>
  )
}

export default Orders
