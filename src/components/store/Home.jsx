// This is the home componet for the store part of the app. first we are checking if we have something in the product array. if not we are just displaying a text to tell users there's no product at the moment. 
//If there exist a product, then we are to display the products component passing the products array as props. 
// The product array is in the context api ceated in this project
import Products from './Products';
import useMainContext from '../../hooks/useMainContext';
import ProductCarousel from './ProductCarousel';

const StoreHome = () =>
{
  const {products} = useMainContext()
  return (
    <main className='h-screen'>
      <ProductCarousel/>
      { products?.length ? (
        <Products products={products} text='Our product'/>
      ): (
        <div className="h-screen d-flex align-items-center justify-content-center">
          <p className="p-5 shadow-sm border border-sucess h4 fw-bold text-uppercase rounded w-75 mx-auto text-center">Ops! there is no product to display at the moment</p>
        </div>
      ) }
    </main>
  )
}

export default StoreHome
