// This is the Store page layout in accordance to the latest react router dom version. The store page will have a header which is unique to all nested outlent of the component and will also make use of the general footer of the page
import StoreHeader from './store/StoreHeader';
import { Outlet } from 'react-router-dom';
import Footer from './Footer'


const Store = () =>
{
  return (
    <>
      <StoreHeader />
      <Outlet />
      <Footer/>
    </>
  )
}

export default Store
