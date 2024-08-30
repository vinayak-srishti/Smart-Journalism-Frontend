
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbarr from './Component/Navbar/Navbarr';
import Adminnav from './Component/Admin/Adminnav';
import Adminlog from './Component/Admin/Adminlog';
import Adminhome from './Component/Admin/Adminhome';
import Userreg from './Component/User/Userreg';
import Userlog from './Component/User/Userlog';
import Forgot from './Component/User/Forgot';
import Journalistlog from './Component/Journalist/Journalistlog';
import Medialog from './Component/Media/Medialog';
import Viewjournalist from './Component/Admin/Viewjournalist';
import Viewuser from './Component/Admin/Viewuser';
import Viewmedia from './Component/Admin/ViewMedia';

import Journalistreg from './Component/Journalist/Journalistreg';
import Adminlognav from './Component/Admin/Adminlognav';
import Mainhome from './Component/Home/Mainhome';
import Adminsidebar from './Component/Admin/Adminsidebar';
import Adminmain from './Component/Admin/Adminmain';
import Aboutt from './Component/About/Aboutt';
import Footerr from './Component/Footer/Footerr';
import Vj from './Component/Admin/Vj';
import Approvedjournalist from './Component/Admin/Approvedjournalist';
import Registereduser from './Component/Admin/Registereduser';
import Vp from './Component/Admin/Vp';
import Vr from './Component/Admin/Vr';
import Journalistprofile from './Component/Admin/Journalistprofile';
import Contactt from './Component/Contact/Contactt';
import Userhomenav from './Component/Navbar/Userhomenav';
import Newss from './Component/News/Newss';
import Jourhomenav from './Component/Navbar/Jourhomenav';
import Vjp from './Component/Journalist/Vjp';
import Viewnews from './Component/News/Viewnews';
import Pviewnews from './Component/News/Pviewnews';
import Savednews from './Component/News/Savednews';
import Avn from './Component/Admin/Avn';
import Userprofile from './Component/Admin/Userprofile';
import Viewid from './Component/News/Viewid';
import Journews from './Component/News/Journews';
function App() {
  return (
    <BrowserRouter>
    <div >
    <Routes>
    <Route path='/Navbarr' element={<Navbarr />} />
    
    <Route path='/Adminnav' element={< Adminnav/>} />
    <Route path='/Adminlog' element={[<Adminlognav/>,< Adminlog/>,<Footerr/>]} />
    <Route path='/Adminhome' element={[<Adminnav/>,<Adminhome/>]} />
    <Route path='/Userreg' element={[<Navbarr/>,<Userreg/>]} />
    <Route path='/Userlog' element={[<Navbarr/>,<Userlog/>,<Footerr/>]} />
    <Route path='/Journalistlog' element={[<Navbarr/>,<Journalistlog/>,<Footerr/>]} />
    <Route path='/Medialog' element={[<Navbarr/>,<Medialog/>]} />
    <Route path='/Forgot' element={<Forgot/>} />
    <Route path='/Viewjournalist' element={<Viewjournalist/>} />
    <Route path='/Viewuser' element={[<Adminnav/>,<Viewuser/>]} />
    <Route path='/Viewmedia' element={[<Adminnav/>,<Viewmedia/>]} />
    
    <Route path='/Journalistreg' element={[<Navbarr/>,<Journalistreg/>]}/>
    <Route path='/Mainhome' element={[<Navbarr/>,<Mainhome/>]}/>
    <Route path='/Adminsidebar' element={<Adminsidebar/>}/>
    <Route path='/Adminmain' element={<Adminmain/>}/>
    <Route path='/Aboutt' element={[<Navbarr/>,<Aboutt/>]}/>
    <Route path='/Footerr' element={<Footerr/>}/>
    <Route path='/Vj' element={<Vj/>}/>
    <Route path='/Approvedjournalist' element={<Approvedjournalist/>}/>
    <Route path='/Registereduser' element={<Registereduser/>}/>
    <Route path='/Vp' element={<Vp/>}/>
    <Route path='/Vr' element={<Vr/>}/>
    <Route path='/Journalistprofile/:id' element={<Journalistprofile/>}/>
    <Route path='/Contactt' element={[<Navbarr/>,<Contactt/>]}/>
    <Route path='/Userhomenav' element={<Userhomenav/>}/>
    <Route path='/Newss' element={[<Jourhomenav/>,<Newss/>]}/>
    <Route path='/Jourhomenav' element={<Jourhomenav/>}/>
    <Route path='/Vjp/:id' element={[<Jourhomenav/>,<Vjp/>]}/>
    <Route path='/Viewnews' element={[<Jourhomenav/>,<Viewnews/>]}/>
    <Route path='/Pviewnews' element={[<Userhomenav/>,<Pviewnews/>]}/>
    <Route path='/Savedwnews' element={[<Userhomenav/>,<Savednews/>]}/>
    <Route path='Avn' element={<Avn/>}/>
    <Route path='/Userprofile/:id' element={<Userprofile/>}/>
    <Route path='/Viewid' element={[<Jourhomenav/>,<Viewid/>]}/>
    <Route path='/Journews' element={<Journews/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
