import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './Component/Home/Home';
import Portofolio from './Component/Protofolio/Portofolio';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
import Layout from './Component/Layout/Layout';
const myRouter = createBrowserRouter([
 {path : "/" , element : <Layout /> , children : [
  {index : true , element : <Home /> },
  {path : 'about' , element : <About />},
  {path : 'home' , element : <Home />},
  {path : 'portofolio' , element : <Portofolio />},
  {path : 'contact' , element : <Contact />},
 
 ]}
]) 
function App() {

 
  return <>
   <RouterProvider router={myRouter}  />
 
  </>
}

export default App;
