import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import { BrowserRouter, Link, Route, Routes, useNavigation } from 'react-router-dom'
import User from './pages/User';
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import NoPage from './pages/NoPage';
import AdminMain from './components/admin/AdminMain';
import OurSubscribers from './components/admin/OurSubscribers';
import AdminUsers from './components/admin/AdminUsers';
import UpdateUser from './components/admin/UpdateUser';
import FormDetails from './pages/FormDetails';
import Serach from './pages/Serach';
import Navbar from './components/Navbar';
import mern from './Images/mern.jpeg'
import { authAxios } from './axiosInterceptros/AxiosInterceptors';
import { AdminRoutes, UserRoutes } from './components/ProtectedRoutes';
export const userContext = createContext()

function App() {

  const [userType,setUserType] = useState({});
  const [formData,setFormData] = useState({});
  const [sub,setSub] = useState({});
  const [user,setUser] = useState({});
  const [getUser,setgetUser] = useState('');
  const isLoggedIn = window.localStorage.getItem('loggedIn')

  

    const [userDetail,setUserDetail] = useState('')
  // console.log(wind);
  const token = window.localStorage.getItem('token')
  const isAdmin = window.localStorage.getItem('status')

  useEffect(()=>{

    authAxios.post('/getUser',{token})
    .then(msg => {
        // console.log(msg.data)
         setUserDetail(msg.data)
       

        // if(msg.data =='data added') setShowmail(!showmail)
    })
    .catch(err => console.log(err))
    
  },[token])
  

    // GET all subscribers
    useEffect(()=>{

      authAxios.get('/admin/subscribers')
  .then(msg => {
      // console.log(msg.data)
       setSub(msg.data)
     

      // if(msg.data =='data added') setShowmail(!showmail)
  })
  .catch(err => console.log(err))
  },[])


  // GET all users
  useEffect(()=>{

      authAxios.get('/admin/users')
  .then(msg => {
      // console.log(msg.data)
       setUser(msg.data)
     

      // if(msg.data =='data added') setShowmail(!showmail)
  })
  .catch(err => console.log(err))
  },[])

   // JOINED customer
   useEffect(()=>{

      authAxios.get('/userFormData/getcustomer/'+userDetail.email)
  .then(msg => {
       setFormData(msg.data)
    
  })
  .catch(err => console.log(err))
  },[userDetail])

  



  return (
    <div className="App">
    
      <userContext.Provider value={{userType:userType,setUserType:setUserType,user:user,setUser:setUser,sub:sub,setSub:setSub,userDetail:userDetail,formData}}>
          <BrowserRouter>
              <Routes>
                    <Route path='/' element={  <Home userDetail = {userDetail}/>} />
                    <Route path='/register' element={  <Register/>} />
                    <Route path='/login' element={<Login/>} />
                          <Route element={<AdminRoutes/>}>
                                  <Route path='/admin' element={<Admin userDetail = {userDetail}/>} />
                                  <Route path='/userdetail' element={<AdminUsers/>}/>
                                  <Route path='/subscriberuser' element={<OurSubscribers/>}/>
                                  <Route path='/updateuser/:id' element={<UpdateUser/>}/>
                                  <Route path='/search' element={<Serach/>}/>
                          </Route>
                          <Route element={<UserRoutes/>}>
                                  <Route path='/formdata' element={<FormDetails/>}/>
                                  <Route path='/user/:id' element={  <User/>} />
                          </Route>
              </Routes>
          </BrowserRouter>
      </userContext.Provider>

    </div>
  );
}

export default App;
