/* eslint-disable react-hooks/exhaustive-deps */
//This it the context Api from react dom. This is where major states are managed and the logic behind some processes in the application.
import { createContext, useState } from "react";
import { StoreProduct } from "../db/product";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainContext = createContext( {} );


export const MainProvider = ( { children } ) =>
{
      const navigate = useNavigate()
      const [ products, setProducts ] = useState( StoreProduct )
      const [ cart, setCart ] = useState( [] )
      const [cartSubTotal, setCartSubTotal] = useState(0)
      const [cartTotal, setCartTotal] = useState(0)
      const [ cartTax, setCartTax ] = useState( 0 )
      const [count, setCount] = useState(0)
      // This is the useEffect hook that runs once when the component loads
      // useEffect( () => {
      //       setProducts(StoreProduct)
      // },[])

      
      // This is a utility function that is used to find an item by it ID
      //This functon can be used anywhere to find a product with a particular id.
      const getItem=( id ) =>
      {
            const product = products.find( item => item.id === id )
            return product
      }

      //This is the function that runs when teh add to cart button is clicked for a product.
      //initially the we destructure the products array and assign it to a variable called tempProduct.
      //Then we locate the index of the item by calling the getItem utility function and passing the id of the item to it. the reason is because we will want all item to remaiin at their position when added to the cart. Tben we change the necesseary values ans set the product state to the new tempProduct array and also add the product to the cart array 
      const addToCart = (id) =>
      {
            const tempProduct = [ ...products ];
            const index = tempProduct.indexOf( getItem( id ) )
            const product = tempProduct[ index ]

            product.inCart = true;
            product.count = 1;
            const price = product.price
            product.total = price;

            setProducts( tempProduct )
            setCart([...cart,product])
            setCount(cart.length)
      }


      // This is the function that runs whenever the increment button is clicked in the application.
      //First we look in the cart and find the item we want to increase using it id. Then we increase the count and sum up the total 
      const increment = ( id ) =>
      {
            let tempCart = cart
            const selectedProduct = tempCart.find( item => item.id === id )
            const index = tempCart.indexOf(selectedProduct) 
            const product = tempCart[ index ]
            product.count++
            product.total = product.count * product.price
            
            setCart([...tempCart])
      }

      // This is the function that runs whenever the decrement button is clicked in the application.
      //First we look in the cart and find the item we want to decrease using it id. Then we decrease the count and sum up the total 
      const decrement = ( id ) =>
      {
            let tempCart = cart
            const selectedProduct = tempCart.find( item => item.id === id )
            const index = tempCart.indexOf(selectedProduct) 
            const product = tempCart[ index ]
            product.count--
            if (product.count === 0) {
                  deleteItem(id)
            }else{
                  product.total = product.count * product.price;
                  setCart( [ ...tempCart ] )
            }
            
      }

      // This is the function that runs whenever the delete button is clicked in the application.
      //First we look in the cart and find the item we want to delete using it id. Then we delete the count and sum up the total 
      const deleteItem = ( id ) =>
      {
            let tempProduct = products
            let tempCart = cart
            tempCart = tempCart.filter( item => item.id !== id )
            const index = tempProduct.indexOf( getItem( id ) )

            const removedProduct = tempProduct[ index ]
            removedProduct.inCart = false;
            removedProduct.count = 0;
            removedProduct.total = 0;

            setProducts(tempProduct)
            setCart([...tempCart])
      }

      //This function clears all the Cart and reset everything to its original state
      const clearAll = () =>
      {
            
            const tempProduct = products.map( item =>
            {
                  const product = item
                  product.inCart = false;
                  product.total = 0;
                  product.count = 0;
                  return product
            } )
            setProducts(tempProduct)
            setCart( [] );
            navigate( '../store' );
      }

      //This useEffect runs the add total function when ever the add to cart button or function is runed and also when the cart component changes
      useEffect( () =>
      {
            const addTotal = () =>
            {
                  let subTotal = 0
                  cart.map( item => subTotal += item.total )
                  const tempTax = subTotal * 0.1
                  const tax = parseFloat( tempTax.toFixed( 2 ) )
                  const total = subTotal + tax
                  setCartSubTotal(subTotal)
                  setCartTax( tax )
                  setCartTotal(total)
            }
            addTotal()
            setCount(cart.length)
      },[addToCart,cart])
      return (
            <MainContext.Provider value={ {
                  products, addToCart, cart, cartSubTotal,cartTax,cartTotal,decrement,increment,deleteItem,clearAll, count
            } }>
                  {children}
            </MainContext.Provider>
      )
}


export default MainContext;