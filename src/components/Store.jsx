import React from 'react'
import StoreHeader from './store/StoreHeader';
import { Outlet } from 'react-router-dom';
import Footer from './Footer'

const Store = () => {
  return (
    <>
      <StoreHeader />
      <Outlet />
      <Footer/>
    </>
  )
}

export default Store
