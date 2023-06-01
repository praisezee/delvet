import { Route, Routes } from "react-router-dom";
import Layout from './Layout'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={ <Contact /> } />
        <Route path="register" element={ <Register /> } />
        <Route path="login" element={<Login/>} />
      </Route>
      <Route path="store">
      </Route>
    </Routes>
  )
}

export default App
