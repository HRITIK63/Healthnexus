import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Adlogin from './Pages/Adlogin';
import Admindash from './Admin/Admindash';
import Addoc from './Admin/Addoc';
import Adpatient from './Admin/Adpatient';
import Viewdoc from './Admin/Viewdoc';
import Viewpatient from './Admin/Viewpatient';
import Viewfeed from './Admin/Viewfeed';

import Viewnews from './Admin/Viewnews';
import Adnews from './Admin/Adnews';
import Viewapp from './Admin/Viewapp';
import Reg from './Pages/Reg';
import Editdoc from './Admin/Editdoc';
import Login from './Pages/Login';
import Ddash from './Doctor/Ddash';
import Pdash from './Patient/Pdash';
import Editpatient from './Admin/Editpatient';
import Pappointment from './Patient/Pappointment';
import Preqapp from './Patient/Preqapp';
import Dappointment from './Doctor/Dappointment';
import Dconapp from './Doctor/Dconapp';
import Dcanapp from './Doctor/Dcanapp';
import Dcomapp from './Doctor/Dcomapp';
import Home from './Home/Home';
import Pfeed from './Patient/Pfeed';
import Pviewfeed from './Patient/Pviewfeed';

import Dfeed from './Doctor/Dfeed';
import Dviewfeed from './Doctor/Dviewfeed';
import Emer from './Component/Emer';
import Addblog from './Doctor/Addblog';
import Alldocs from './Home/Alldocs';
import Allfeeds from './Home/Allfeeds';
import Abus from './Component/Abus';
import Dviewnews from './Doctor/Dviewnews';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
        <Emer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/alldocs' element={<Alldocs />} />
          <Route path='/allfeeds' element={<Allfeeds />} />
          <Route path='/abus' element={<Abus />} />
          <Route path='/dnews' element={<Dviewnews />} />
          <Route path='/reg' element={<Reg />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Adlogin />} />
          <Route path='/pfeed' element={<Pfeed />} />
          <Route path='/pviewfeed' element={<Pviewfeed />} />
          <Route path='/dfeed' element={<Dfeed />} />
          <Route path='/dviewfeed' element={<Dviewfeed />} />
          <Route path='/admindash' element={<Admindash />} />
          <Route path='/ddash' element={<Ddash />} />
          <Route path='/pdash' element={<Pdash />} />
          <Route path='/dconapp' element={<Dconapp />} />
          <Route path='/dcanapp' element={<Dcanapp />} />
           <Route path='/dcomapp' element={<Dcomapp />} />
          <Route path='/addblog' element={<Addblog />} />
          <Route path='/papp' element={<Pappointment />} />
          <Route path='/preqapp' element={<Preqapp />} />
          <Route path='/penapp' element={<Dappointment />} />
          <Route path='/addoc' element={<Addoc />} />
          <Route path='/viewdoc' element={<Viewdoc />} />
          <Route path='/editdoc' element={<Editdoc />} />
          <Route path='/editpatient' element={<Editpatient />} />
           <Route path='/adpatient' element={<Adpatient />} />
           <Route path='/viewpatient' element={<Viewpatient />} />
           <Route path='/viewfeed' element={<Viewfeed />} />
           <Route path='/viewnews' element={<Viewnews />} />
           <Route path='/adnews' element={<Adnews />} />
          <Route path='/viewapp' element={<Viewapp />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
