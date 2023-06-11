import { Route, Routes } from "react-router-dom";
import Layout from './Layout'
import Home from "./components/Home";
import StoreHome from "./components/store/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import Store from "./components/Store";
import Details from "./components/store/Details";
import Missing from "./components/Missing";
import Cart from "./components/store/Cart";
import Api from "./components/store/Api";
import Vacine from "./components/store/Vacine";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={ <Contact /> } />
        <Route path="register" element={ <Register /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="*" element={<Missing/>}/>
      </Route>
      <Route element={ <Store /> }>
        <Route path='store' >
          <Route index element={<StoreHome/>}/>
          <Route path=":id" element={ <Details /> } />
        </Route>
        <Route path="cart" element={<Cart/>}/>     
        <Route path="category">
          <Route path="api" element={<Api/>}/>     
          <Route path="vacines" element={<Vacine/>}/>   
        </Route>  
      </Route>
    </Routes>
  )
}

export default App
