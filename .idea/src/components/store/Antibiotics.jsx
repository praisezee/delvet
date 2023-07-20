import useMainContext from '../../hooks/useMainContext';
import Products from './Products';

const Antibiotics = () => {
  const { products } = useMainContext()
  const antibioticsProduct = products.filter(p => p.category.toLowerCase() === 'antibiotics')
  return (
    <main className='h-screen'>
      { antibioticsProduct?.length ? (
        <Products products={antibioticsProduct} text='Antibiotics'/>
      ): (
        <div className="h-screen d-flex align-items-center justify-content-center">
          <p className="p-5 shadow-sm border border-success h4 fw-bold text-uppercase rounded w-75 mx-auto text-center">Ops! there is no product to display at the moment</p>
        </div>
      ) }
    </main>
  )
}

export default Antibiotics
