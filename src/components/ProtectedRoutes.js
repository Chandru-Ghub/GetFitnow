import React from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom'


// check wheather user is Admin or not
const auth =()=>{
    const isAdmin = window.localStorage.getItem('status')
    if (isAdmin == 'true') return true
    return false
}


// check wheather user logged in or not 
const user = ()=>{
    const token = window.localStorage.getItem('token')
    return token
}

export const AdminRoutes = () => {
const isAuth = auth()
  return isAuth ? <Outlet/> : <Navigate to= '/'/>
  
}
export const UserRoutes =()=>{
    const token =  user()
    return token ? <Outlet/> : <Navigate to = '/login'/>
}

