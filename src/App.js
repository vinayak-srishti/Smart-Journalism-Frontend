import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Journalistlogin from './Component/Journalistlogin';
import Userlogin from './Component/Userlogin';
import Superlogin from './Component/Superlogin';
import Userreg from './Component/Userreg';
import Mediareg from './Component/Mediareg';
import Forgot from './Component/Forgot';

function App() {
  return (

    <BrowserRouter>

      <div>

        <Routes>
          <Route path='/loginpage' element={[<Navbar />, <Login />,]} />
          <Route path='/Registerpage' element={[<Navbar />, <Register />]} />
          <Route path='/Homepage' element={[<Navbar />, <Home />,]} />
          <Route path='/Aboutpage' element={[<Navbar />, <About />,]} />
          <Route path='/Superloginpage' element={[<Navbar />, <Superlogin />,]} />
          <Route path='/Journalistloginpage' element={[<Navbar />, <Journalistlogin />,]} />
          <Route path='/Userloginpage' element={[<Navbar />, <Userlogin />,]} />
          <Route path='/Userregpage' element={[<Navbar />, <Userreg />,]} />
          <Route path='/Mediaregpage' element={[<Navbar />, <Mediareg />,]} />
          <Route path='/Forgotpage' element={[<Navbar />, <Forgot />,]} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
