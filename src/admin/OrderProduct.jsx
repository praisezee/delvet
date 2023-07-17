import React,{useState,useEffect} from 'react'
import axios from '../api/axios';

const OrderProduct = ( { item } ) =>
{
  const [ product, setProduct ] = useState( {} )
  const getProduct = async () =>
    {
      try {
        const response = await axios.get(`/products/${item.product_id}`)
        const result = await response.data
        setProduct( result )
        console.log(result)
      } catch (err) {
        console.error(err)
      }
    }
  useEffect( () =>
  {
    getProduct()
  }, [] )
  return (
    <table className='table table-bordered rounded'>
      <thead>
        <tr>
          <th scope='col'>Product name</th>
          <th scope='col'>Product quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='text-capitalize'>{ product.name }</td>
          <td>{ item.quantity }</td>
        </tr>
      </tbody>
    </table>
  )
}

export default OrderProduct
