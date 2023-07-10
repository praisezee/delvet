import useMainContext from '../../hooks/useMainContext';
import Products from './Products';

const FeedAdditives = () => {
  const { products } = useMainContext()
  const feedAdditives = products.filter(p => p.category.toLowerCase() === 'feeds')
  return (
    <main className='h-screen'>
      { feedAdditives?.length ? (
        <Products products={feedAdditives} text='Feeds'/>
      ): (
        <div className="h-screen d-flex align-items-center justify-content-center">
          <p className="p-5 shadow-sm border border-success h4 fw-bold text-uppercase rounded w-75 mx-auto text-center">
            Ops! there is no product to display at the moment
          </p>
        </div>
      ) }
    </main>
  )
}

export default FeedAdditives;
