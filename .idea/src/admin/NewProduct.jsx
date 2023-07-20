import { Button, Col, Container, FloatingLabel, FormControl, FormSelect, Row } from 'react-bootstrap';
import useProductContext from '../hooks/useProductContext'

const NewProduct = () =>
{
  const {description,setDescription,setSrc,price,setPrice,category,setCategory,quantity,setQuantity,name,setName,handleNewProduct} = useProductContext()
  const onImgChange = ( e ) =>
  {
    const file = e.target.files[0]
    setFileToBase(file)


    // console.log(imgUrl)
  }

  const setFileToBase = ( file ) =>
  {
    const reader = new FileReader()
    reader.readAsDataURL( file )
    reader.onloadend = () =>
    {
      setSrc(reader.result)
    }
  }
  return (
    <Container className='d-flex justify-content-center align-items-center h-screen'>
      <Row className='border rounded shadow-sm px-3 py-5'>
        <p className="text-center text-capitalize h3 mb-3">Add product</p>
        <Col xs={ 10 } md={ 6 } className='my-auto mx-auto'>
          <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Product Name">
              <FormControl placeholder='Enter product name' type='text' className='border border-success' value={name} onChange={(e)=>setName(e.target.value)} />
            </FloatingLabel>
        </Col>
        <Col xs={ 10 } md={ 6 } className='my-auto mx-auto'>
          <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Quantity">
              <FormControl placeholder='Enter product name' type='text' className='border border-success' value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
            </FloatingLabel>
        </Col>
        <Col xs={ 10 } md={ 6 } className='my-auto mx-auto'>
          <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Category">
            <FormSelect value={category} onChange={(e)=>setCategory(e.target.value)} className='border border-success'>
              <option value="Select an option">Select an option</option>
              <option value="api">API</option>
              <option value="vacines">Vacines</option>
              <option value="antibiotics">Antibiotics</option>
              <option value="feeds">Feed additives</option>
              <option value="poultry">Poultry bird</option>
              </FormSelect>
            </FloatingLabel>
        </Col>
        <Col xs={ 10 } md={ 6 } className='my-auto mx-auto'>
          <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Price">
              <FormControl  value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter product name' type='text' className='border border-success'/>
            </FloatingLabel>
        </Col>
        <Col xs={ 10 } md={ 6 } className='my-auto mx-auto'>
          <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Image">
              <FormControl  onChange={(e)=>onImgChange(e)} placeholder='Enter product name' type='file' className='border border-success'/>
            </FloatingLabel>
        </Col>
        <Col xs={ 10 } md={ 6 } className='my-auto mx-auto'>
          <FloatingLabel controlId='floatingInputGrid' className='my-2' label="Product Description">
              <FormControl placeholder='Enter product name' as='textarea' style={{height:'100px'}} type='text' value={description} onChange={(e)=>setDescription(e.target.value)} className='border border-success'/>
            </FloatingLabel>
        </Col>
        <Col xs={ 8 } md={ 6 } className='mx-auto text-center mt-3'>
          <Button variant='outline-success' onClick={handleNewProduct}>Add Product</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default NewProduct
