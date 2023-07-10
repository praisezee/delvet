/* eslint-disable react-hooks/exhaustive-deps */
//This it the context Api from react dom. This is where major states are managed and the logic behind some processes in the application.
import { createContext, useState,useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const MainContext = createContext( {} ); // create context object


export const MainProvider = ( { children } ) =>
{
    
      const navigate = useNavigate();
      const location = useLocation()
      const from = location.state?.from?.pathname || "store";
      //These are the state for the products.
      const [ products, setProducts ] = useState([]);
      const [ cart, setCart ] = useState( [] );
      const [ cartSubTotal, setCartSubTotal ] = useState( 0 );
      const [ cartTotal, setCartTotal ] = useState( 0 );
      const [ cartTax, setCartTax ] = useState( 0 );
      const [ count, setCount ] = useState( 0 );

      // These are the state for the user registration and login
      const [ auth, setAuth ] = useState( {} );
      const [ name, setName ] = useState( '' );
      const [ email, setEmail ] = useState( '' );
      const [ phoneNumber, setPhoneNumber ] = useState( '' );
      const [ password, setPassword ] = useState( '' );
      const [confirm, setConfirm] = useState('')
      const [ success, setSuccess ] = useState( false );
      const [ code, setCode ] = useState( '' );
      const [ errMsg, setErrMsg ] = useState( '' );
      const [isLoading, setIsLoading] = useState(false)
      const [loading,setLoading] = useState(true)
      const [toast,  setToast] = useState(false)
      const [text,  setText] = useState('')
      const [variant,  setVariant] = useState('')
      const [address,setAddress] =useState('')
      const [active, setActive] = useState(false)
      const [addressModal, setAddressModal] = useState(false)

      //This use effect runs once when the component mounts to get the products from the database
      useEffect( () =>
      {
            const getProducts = async () =>
            {
                  try {
                        const res = await axios.get( '/products', {
                              headers: { 'Content-Type': 'application/json' },
                              withCredentials:true
                        } )
                        const results = await res.data
                        setProducts( results )
                        setLoading(false)
                  } catch (error) {   //throw or show error in the console
                        console.error(error)
                  }
            }
            getProducts()
      },[])

      // This useEffect runs when the email and password state changes
      useEffect( () =>
      {
            setErrMsg('')
      },[email,password])


      //This is the function that handles the registration of a user
      const handleRegister = async () =>
      {
            setIsLoading(true)
            try {
                  await axios.post( '/auth/register', JSON.stringify( { name, email, phoneNumber, password } ), {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                        } );
                  await axios.post( '/verify/mail', JSON.stringify( { email } ),
                        {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                        }
                  );

                  setName( '' );
                  setPhoneNumber( '' );
                  setPassword( '' );
                  setConfirm( '' );
                  navigate('../login')
                  setErrMsg('')

            } catch ( err ) {
                  if ( !err?.response ) {
                        setErrMsg( 'No server response' );
                  } else if ( err.response?.status === 409 ) {
                        setErrMsg( 'Email already exist. Enter an new email' );
                  } else {
                        setErrMsg( 'Registration failed. pls try again or contact the admin support' );
                  }
                  setIsLoading(false)
            }
      }

            // This is the function thet handles gmail verification
            const verifyEmail = async () =>
            {
                  try {
                        await axios.post( '/verify/code', JSON.stringify( { email, code } ), {
                              headers: { 'Content-Type': 'application/json' },
                              withCredentials: true
                        } );
                        navigate( '../login' );
                        setCode( '' );
                  } catch ( err ) {
                        if ( !err?.res ) {
                              console.log( 'no server response' );
                        } else if ( err.response.status === 401 ) {
                              console.log( 'invalid Verification code' );
                              setErrMsg( 'Inavlid code. Enter verification code sent to you in your email' );
                        } else {
                              setErrMsg( 'Enter verification code sent to you in your email' );
                        }
                  }
      };
      
      const handleAdminActive = () =>
      {
            setActive(true)
      }
      const handleLoginActive = () =>
      {
            setActive(false)
      }
      const handleAdminLogin = () =>
      {
            setIsLoading(true)
            if ( email !== 'delvet.com.ng' && password !== 'delvet123' ) {
                  setErrMsg( 'Invalid Logins' )
                  setIsLoading(false)
            } else {
                  navigate( '../admin' )
                  setIsLoading(false)
            }
      }
      //This is the login function
      const handleLogin = async ( e ) =>
      {
            e.preventDefault()
            setIsLoading(true)
            try {
                  const res = await axios.post( '/auth/login', JSON.stringify( { email, password } ),
                        {
                              headers: { 'Content-Type': 'application/json' },
                              withCredentials: true
                        } )
                  const result = await res.data
                  setAuth( result )
                  setPassword( '' )
                  navigate( from, { replace: true } )
                  setIsLoading(false)
            } catch (err) {
                  if ( !err.response ) {
                        setErrMsg( 'No server response' )
                        setIsLoading(false)
                  } else if ( err.response?.status === 400 ){
                        setErrMsg( 'Missing Email or password' )
                        setIsLoading(false)
                  } else if (err.response?.status === 401){
                        setErrMsg('Invalid Email or password')
                        setIsLoading(false)
                  }
                  else {
                  setErrMsg('Login Failed')
                  setIsLoading(false)
                  }
            }
      }

      
            // This is a utility function that is used to find an item by it ID
            //This functon can be used anywhere to find a product with a particular id.
            const getItem = ( id ) =>
            {
                  const product = products.find( item => item.product_id === id );
                  return product;
            };

            //This is the function that runs when teh add to cart button is clicked for a product.
            //initially the we destructure the products array and assign it to a variable called tempProduct.
            //Then we locate the index of the item by calling the getItem utility function and passing the id of the item to it. the reason is because we will want all item to remaiin at their position when added to the cart. Tben we change the necesseary values ans set the product state to the new tempProduct array and also add the product to the cart array 
            const addToCart = ( id ) =>
            {
                  const tempProduct = [ ...products ];
                  const index = tempProduct.indexOf( getItem( id ) );
                  const product = tempProduct[ index ];

                  product.inCart = true;
                  product.count = 1;
                  const price = product.price;
                  product.total = price;

                  setText('Item was added to the cart successfully')
                  setToast( true )
                  setVariant('success')

                  setProducts( tempProduct );
                  setCart( [ ...cart, product ] );
                  setCount( cart.length );
            };


            // This is the function that runs whenever the increment button is clicked in the application.
            //First we look in the cart and find the item we want to increase using it id. Then we increase the count and sum up the total 
            const increment = ( id ) =>
            {
                  let tempCart = cart;
                  const selectedProduct = tempCart.find( item => item.product_id === id );
                  const index = tempCart.indexOf( selectedProduct );
                  const product = tempCart[ index ];
                  product.count++;
                  product.total = product.count * product.price;
            
                  setCart( [ ...tempCart ] );
            };

            // This is the function that runs whenever the decrement button is clicked in the application.
            //First we look in the cart and find the item we want to decrease using it id. Then we decrease the count and sum up the total 
            const decrement = ( id ) =>
            {
                  let tempCart = cart;
                  const selectedProduct = tempCart.find( item => item.product_id === id );
                  const index = tempCart.indexOf( selectedProduct );
                  const product = tempCart[ index ];
                  product.count--;
                  if ( product.count === 0 ) {
                        deleteItem( id );
                  } else {
                        product.total = product.count * product.price;
                        setCart( [ ...tempCart ] );
                  }
            
            };

            // This is the function that runs whenever the delete button is clicked in the application.
            //First we look in the cart and find the item we want to delete using it id. Then we delete the count and sum up the total 
            const deleteItem = ( id ) =>
            {
                  let tempProduct = products;
                  let tempCart = cart;
                  tempCart = tempCart.filter( item => item.product_id !== id );
                  const index = tempProduct.indexOf( getItem( id ) );

                  const removedProduct = tempProduct[ index ];
                  removedProduct.inCart = false;
                  removedProduct.count = 0;
                  removedProduct.total = 0;
                  setText('Item was deleted successfully')
                  setToast( true )
                  setVariant('danger')

                  setProducts( tempProduct );
                  setCart( [ ...tempCart ] );
            };

            //This function clears all the Cart and reset everything to its original state
            const clearAll = () =>
            {
            
                  const tempProduct = products.map( item =>
                  {
                        const product = item;
                        product.inCart = false;
                        product.total = 0;
                        product.count = 0;
                        return product;
                  } );
                  setProducts( tempProduct );
                  setCart( [] );
                  navigate( '../store' );
                  setText('Cart item was successfully deleted')
                  setToast( true )
                  setVariant('danger')
            };
      //Fluterwave implementation with the config for payment of goods.

      const paymentConfig = {
            public_key: 'FLWPUBK_TEST-53153e88384c416b228ffb431b095132-X',
    tx_ref: Date.now(),
    amount: cartTotal,
    currency: 'NGN',
    payment_options:"card,ussd",
    customer: {
      email: auth.email,
      phone_number: auth.phoneNumber,
      name: auth.name
            },
            customizations: {
                  title: 'Purchase of goods',
                  description: 'Payment for items in cart'
    }
      }
      const payments = useFlutterwave(paymentConfig)
      const pendingCheckout = async () =>
      {
            const orderItem = cart.map( item =>
            {
                  const order = { product_id: item.product_id, quantity: item.count }
                  return order;

            } )
            console.log( orderItem )
            try {
                  const res = await axios.post( '/order',  { user_id: auth.id, address, products: orderItem,status:'pending' } )
                  const result = res.data
                  console.log(result)

            } catch (error) {
                  console.error(error)
            }
      }
      const successCheckout = async () =>
      {
            const orderItem = cart.map( item =>
            {
                  const order = { product_id: item.product_id, quantity: item.count }
                  return order;

            } )
            console.log( orderItem )
            try {
                  const res = await axios.post( '/order',  { user_id: auth.id, address, products: orderItem,status:'success' } )
                  const result = res.data
                  console.log(result)

            } catch (error) {
                  console.error(error)
            }
      }
      const checkout = async () =>
      {
            payments( {
                  callback: ( res ) =>
                  {
                        console.log( res )
                        setText('Item was successfully purchased')
                        setToast( true )
                        setVariant('success')
                        setCart([])
                        successCheckout()
                        closePaymentModal()
                  },
                  onClose: () =>
                  {
                        setText('Your purchase was canceled')
                        setToast( true )
                        pendingCheckout()
                        setVariant('danger')
                  }
            })
      }

      const toggleAddressModal = () =>
      {
            setAddressModal(true)
      }

      const toggleAddressModalClose = () =>
      {
            setAddressModal( false )
            pendingCheckout()
      }


            //This useEffect runs the add total function when ever the add to cart button or function is runed and also when the cart component changes
            useEffect( () =>
            {
                  const addTotal = () =>
                  {
                        let subTotal = 0;
                        cart.map( item => subTotal += item.total );
                        const tempTax = subTotal * 0.1;
                        const tax = parseFloat( tempTax.toFixed( 2 ) );
                        const total = subTotal + tax;
                        setCartSubTotal( subTotal );
                        setCartTax( tax );
                        setCartTotal( total );
                  };
                  addTotal();
                  setCount( cart.length );
            }, [ addToCart, cart ] );
            return (
                  <MainContext.Provider value={ {
                        products, addToCart, cart, cartSubTotal, cartTax, cartTotal, decrement, increment, deleteItem, clearAll, count, auth, setAuth,name, setName,email, setEmail,phoneNumber, setPhoneNumber,password, setPassword,success,errMsg, setErrMsg,handleRegister,verifyEmail,isLoading,handleLogin, confirm, setConfirm, setCode, loading, checkout, toast, setToast, variant, text, handleAdminActive,handleLoginActive, active,handleAdminLogin, address, addressModal, setAddress,toggleAddressModal,toggleAddressModalClose
                  } }>
                        { children }
                  </MainContext.Provider>
            );
};


export default MainContext;