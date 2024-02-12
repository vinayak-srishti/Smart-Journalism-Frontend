import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Component/Home';
import About from './Component/About';
function App() {
  return (
  
  <BrowserRouter>
  
    <div>
  <Navbar/>    

<Routes>
  <Route path='/loginpage'element={<Login/>}/>
  <Route path='/Registerpage' element={<Register/>}/>
  <Route path='/Homepage' element={<Home/>}/>
  <Route path='/Aboutpage' element={<About/>}/>
</Routes>
<Footer/>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
