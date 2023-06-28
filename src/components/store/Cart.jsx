import React from 'react'
import CartColumn from './cart/CartColumn';
import useMainContext from '../../hooks/useMainContext'
import EmptyCart from './cart/EmptyCart';
import CartList from './cart/CartList';
import CartTotal from './cart/CartTotal';
import Toasts from '../Toast';

const Cart = () =>
{
  const {cart, variant, text} = useMainContext()
  return (
    <section>
      <Toasts text={text} variant={variant} />
      { cart.length ?
        (
          <>
            <div className='my-3'>
              <p className="h3 fw-bold text-uppercase w-50 mx-auto text-center ">Our product</p>
              <hr className="w-25 mx-auto" />
            </div>
            <CartColumn />
            <CartList />
            <CartTotal/>
          </>
        ) : (
          <EmptyCart/>
        )
      }
    </section>
  )
}

export default Cart
