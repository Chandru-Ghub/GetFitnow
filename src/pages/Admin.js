import React, { useContext, useEffect, useState } from 'react'
import '../styles/Admin.css'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminUsers from '../components/admin/AdminUsers'
import AdminSidebar from '../components/admin/AdminSidebar'
import Navbar from '../components/Navbar'
import AdminMain from '../components/admin/AdminMain'
import AdminNavbar from '../components/admin/AdminNavbar'
import OurSubscribers from '../components/admin/OurSubscribers'
import { userContext } from '../App'
const Admin = () => {

  const data = useContext(userContext)
  
  return (
    <div className='adminContainer'>
       
              <AdminSidebar />
              <div className="mainCon">
             
                <AdminNavbar />

                <div className="sec3">

                          <div className="subUser">
                            <p>  subscribers</p>
                              <p>{data.sub.length}</p>
                          </div>
                          <div className="subUser">
                          <p>  Users</p>
                              <p>{data.user.length}</p>
                          </div>
                          <div className="subUser">
                              administrator
                          </div>


                       </div> 
                {/* <AdminMain sub={sub} users={users}/>  */}
                {/* <Routes>
                        <Route path='/userdetail' element={<AdminMain/>}/>
                        <Route path='/subscriberuser' element={<OurSubscribers/>}/>
                </Routes> */}
                </div>
                {/* <div className="bb">
                    
                </div> */}
                 <h1 className="title2">
            GET<span className='titlegreen'>Fit</span>
          </h1>
        
    </div>
  )
}

export default Admin