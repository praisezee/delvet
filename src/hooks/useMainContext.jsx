// A custom hook that make import from the main context api easier.
import { useContext } from 'react';
import MainContext from '../context/MainContext';

const useMainContext = () => {
  return useContext(MainContext)
}

export default useMainContext
