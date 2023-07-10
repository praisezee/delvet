import { createContext, useState, useEffect} from "react";
import axios from "../api/axios";
import useAxiosPrivate from '../hooks/useAxiosPrivate'
// import { useNavigate } from "react-router-dom";



const ProductContext = createContext( {} );

export const ProductProvider = ( { children } ) =>
{
  const axiosPrivate = useAxiosPrivate()
  // const navigate = useNavigate()
  const [ products, setProducts ] = useState( [] )
  const [ loading, setLoading ] = useState( true )
  const [name,setName] = useState('')
  const [quantity,setQuantity] = useState('')
  const [category,setCategory] = useState('Select an option')
  const [price,setPrice] = useState('')
  const [src,setSrc] = useState(null)
  const [ description, setDescription ] = useState( '' )
  const [editModal, setEditModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [ id, setId ] = useState( '' )
  const [ deleteText, setDeleteText ] = useState( '' )
  const [order, setOrder] = useState([])

  
  useEffect( () =>
  {
    getProduct()
  }, [] )

  const getOrder = async () =>
  {
    
  }

  const getProduct = async () =>
    {
      setLoading(true)
      try {
        const res = await axios.get( '/products', {
          headers: { 'Content-Type': 'application/json' },
          withCredentials:true
    } )
        const result = await res.data
        setProducts( result )
        setLoading(false)
      } catch (err) {
        console.error( err )
        setLoading(false)
      }
    }
  
  const handleNewProduct = async () =>
  {
    try {
      await axiosPrivate.post( '/products', { src, name, category, quantity, description, price } )
      getProduct()
      setName('')
      setCategory('Select an option')
      setQuantity('')
      setDescription('')
      setPrice( '' )
      setSrc( '' )
    } catch (err) {
      console.error(err)
    }
  }

  const handleEditModal = async (id) =>
  {
    try {
      const res = await axiosPrivate.get( `/products/${ id }` )
      const result = await res.data
      
      setName(result.name)
      setCategory(result.category)
      setQuantity(result.quantity)
      setDescription(result.description)
      setPrice( result.price )
      setId( result.product_id )
      setEditModal(true)
    } catch (err) {
      console.error(err)
    }
  }

  const handleEdit = async (id) =>
  {
    try {
      const res = await axiosPrivate.put( '/products', { src, name, category, quantity, description, id, price } )
      setName('')
      setCategory('Select an option')
      setQuantity('')
      setDescription('')
      setPrice( '' )
      setSrc( '' )
      setId('')
      setEditModal( false );
      getProduct()
      console.log( res )
    } catch (err) {
      console.error(err)
    }
  }

  const handleEditClose = () =>
  {
    setName('')
    setCategory('Select an option')
    setQuantity('')
    setDescription('')
    setPrice( '' )
    setSrc( '' )
    setId('')
    setEditModal( false );
  }

  const handleDeleteClose = () =>
  {
    setName('')
    setCategory('Select an option')
    setQuantity('')
    setDescription('')
    setPrice( '' )
    setSrc( '' )
    setId('')
    setDeleteModal( false );
  }

  const handleDeleteModal = async ( id ) =>
  {
    try {
      const res = await axiosPrivate.get( `/products/${ id }` )
      const result = await res.data
      
      setName(result.name)
      setId(result.product_id)
      setDeleteModal(true)
    } catch (err) {
      console.error(err)
    }
  }

  const handleDelete = async (id) =>
  {
    try {
      await axiosPrivate.delete(`/products/${id}`)
      setDeleteModal( false )
      setDeleteText( '' )
      setName('')
      setId('')
      getProduct()
    } catch (error) {
      console.error(error)
    }
  }

  
  return (
    <ProductContext.Provider value={ {
      products,loading,description,setDescription,src,setSrc,price,setPrice,category,setCategory,quantity,setQuantity,name,setName,handleNewProduct, editModal,handleEditModal,handleEdit,setEditModal, id, handleDelete,deleteModal,setDeleteModal,deleteText,setDeleteText,handleDeleteModal,handleEditClose,handleDeleteClose
    }}>
      {children}
    </ProductContext.Provider>
  )
}


export default ProductContext;