import axios from '../api/axios'
import useMainContext from './useMainContext'

const useRefreshToken = () =>
{
  const { setAuth } = useMainContext()
  
  const refresh = async () =>
  {
    const response = await axios.get( '/refresh', {
      withCredentials: true
    } )
    setAuth( response.data )
    return response.data.accessToken
  }

  return refresh;
}

export default useRefreshToken
