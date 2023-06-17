import axios from "axios";


//const DEV_URL = 'http://localhost:3500'
const BASE_URL ='https://delvet.onrender.com'
export default axios.create( {
      baseURL: BASE_URL
} );

export const axiosPrivate = axios.create( {
      baseURL: BASE_URL,
      headers: {"Content-Type": "application/json"},
      withCredentials: true
})