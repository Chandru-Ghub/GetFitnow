import React, { useContext, useEffect, useState } from 'react'
import '../styles/Admin.css'
import axios from 'axios'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import AdminUsers from '../components/admin/AdminUsers'
import AdminSidebar from '../components/admin/AdminSidebar'
import Navbar from '../components/Navbar'
import AdminMain from '../components/admin/AdminMain'
import AdminNavbar from '../components/admin/AdminNavbar'
import OurSubscribers from '../components/admin/OurSubscribers'
import { userContext } from '../App'
const Admin = () => {

  const data = useContext(userContext)
  const navigate = useNavigate()
  return (
    <div className='adminContainer'>
       
              <AdminSidebar />
              <div className="mainCon">
             
                <AdminNavbar />

                <div className="sec3">

                          <div onClick={()=>navigate('/subscriberuser')} className="subUser">
                            <p >  subscribers</p>
                              <p  className='mnm'>&nbsp;#{data.sub.length}</p>
                          </div>
                          <div onClick={()=>navigate('/userdetail')} className="subUser">
                          <p >  Users  </p>
                              <p className='mnm' >&nbsp;#{data.user.length}</p>
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