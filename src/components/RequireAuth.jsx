import useMainContext from '../hooks/useMainContext'
import {useLocation,Outlet,Navigate} from 'react-router-dom'

const RequireAuth = () =>
{
  const { auth } = useMainContext()
  const location = useLocation()
  return (
    auth?.email
      ? <Outlet /> 
      :
      <Navigate
        to='/login'
        state={ { from: location } }
        replace
      />
  )
}

export default RequireAuth
