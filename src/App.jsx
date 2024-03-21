
import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Share/Navbar'
import Login from './components/userAuth/Login'
import SignUp from './components/userAuth/SignUp'
import Home from './components/pages/Home'
import Dashboard from './components/dashboard/dashboard'
import AllDomains from './components/dashboard/allDomains'
import EditDomain from './components/dashboard/editDomain'
import AddDomain from './components/dashboard/addDomain'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './components/dashboard/users'
import Myorders from './components/dashboard/myOrders'
import Cart from './components/component/cart'
import MyProfile from './components/dashboard/MyProfile'
import MyprofileData from './components/hooks/myProfileData'
import UpdateMyProfile from './components/dashboard/UpdateMyProfile'
import Payment from './components/dashboard/Payment'
import RequireAuth from './components/userAuth/RequireAuth'
import NotFound from './NotFound/NotFound'
import RequireAdmin from './components/userAuth/RequireAdmin'
import AllDomain from './components/dashboard/allDomain'
import AllOrders from './components/dashboard/allOrders'
  
function App() {
 

  return (
    <>
    <Navbar />
     <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/login' element={<Login />} ></Route>
      <Route path='/signup' element={<SignUp />} ></Route>

      <Route path='/cart' element={<RequireAuth>
        <Cart/>   </RequireAuth>} ></Route>

      <Route path='dashboard' element={<Dashboard/>} >


      <Route path='myorders' element={<RequireAuth>
        <Myorders/>   </RequireAuth>}  ></Route>

      <Route path='myprofile' element={<RequireAuth>
        <MyProfile/>   </RequireAuth>} ></Route>

      
      <Route path='payment' element={<RequireAuth>
        <Payment/>   </RequireAuth>}></Route>

      <Route path='updatemyprofile' element={<RequireAuth>
        <UpdateMyProfile />   </RequireAuth>} ></Route>

      <Route path='users' element={<RequireAdmin>
        <Users/>   </RequireAdmin>} ></Route>


      <Route path='adddomain' element={<RequireAdmin>
        <AddDomain/>   </RequireAdmin>} ></Route>

      <Route path='editDomain/:id' element={<RequireAdmin>
        <EditDomain/>   </RequireAdmin>} ></Route>

      <Route path='allorders' element={<RequireAdmin>
        <AllOrders/>   </RequireAdmin>} ></Route>

      <Route path='allDomain' element={<RequireAdmin>
        <AllDomains/>   </RequireAdmin>} ></Route>
     



      </Route>

      <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
