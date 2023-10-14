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

export const userContext = createContext()

function App() {

  const [userType,setUserType] = useState({});
  const isLoggedIn = window.localStorage.getItem('loggedIn')

  

    const [userDetail,setUserDetail] = useState('')
  // console.log(wind);
  const token = window.localStorage.getItem('token')
  const isAdmin = window.localStorage.getItem('status')
  console.log(isAdmin);
  
  useEffect(()=>{

    axios.post('http://localhost:3400/getUser',{token})
    .then(msg => {
        // console.log(msg.data)
         setUserDetail(msg.data)
       

        // if(msg.data =='data added') setShowmail(!showmail)
    })
    .catch(err => console.log(err))
    


  },[])
  return (
    <div className="App">
      <userContext.Provider value={{userType:userType,setUserType:setUserType}}>
          <BrowserRouter>
              <Routes>
                    <Route path='/' element={  <Home userDetail = {userDetail}/>} />
                    <Route path='/register' element={  <Register/>} />
                    <Route path='/login' element={  <Login/>} />
                    <Route path='/admin' element={  isAdmin=='true'?<Admin/> :<NoPage/>} />
                    <Route path='/user/:id' element={  <User/>} />
              </Routes>
          </BrowserRouter>
      </userContext.Provider>

    </div>
  );
}

export default App;
