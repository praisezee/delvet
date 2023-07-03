import axios from "axios";


const DEV_URL = 'http://localhost:3500'
const BASE_URL ='https://server.delvet.com.ng'
export default axios.create( {
      baseURL: DEV_URL
} );

export const axiosPrivate = axios.create( {
      baseURL: DEV_URL,
      headers: {"Content-Type": "application/json"},
      withCredentials: true
})
