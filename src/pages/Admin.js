import React, { useEffect, useState } from 'react'
import '../styles/Admin.css'
import axios from 'axios'
const Admin = () => {

  const [sub,setSub] = useState('')
  const [users,setUsers] = useState('')
  // const subscribers=()=>{
  //   console.log('subscribers');
  // }
  // const users=()=>{
  //   console.log('users');
  // }
    useEffect(()=>{

        axios.get('http://localhost:3400/admin/subscribers')
    .then(msg => {
        console.log(msg.data)
         setSub(msg.data)
       

        // if(msg.data =='data added') setShowmail(!showmail)
    })
    .catch(err => console.log(err))
    },[])

    useEffect(()=>{

        axios.get('http://localhost:3400/admin/users')
    .then(msg => {
        console.log(msg.data)
         setUsers(msg.data)
       

        // if(msg.data =='data added') setShowmail(!showmail)
    })
    .catch(err => console.log(err))
    },[])

  return (
    <div className='adminContainer'>
        <dic className="sec1">
              <div className="sidebarAdmin">

                  <ul>
                    <li> Welcome Admin!</li>
                    <li>Users</li>
                    <li>Subscribers</li>
                    <li>Updates</li>
                    <li>Offers</li>
                    <li>Notification</li>
                    <li>Settings</li>
                    <li>Payments</li>
                  </ul>

              </div>
        </dic>

      <div className="sec2">
                <div className="topNav">
                      {/* <div className="adminName">
                        Welcome Admin!
                      </div> */}

                      <div className="adminSearch">
                    
                          <input type="text" />
                            <span class="material-symbols-outlined">
                            search
                            </span>
                  
                      </div>
                      <div className="flogo">
                                <h2>
                                    GETFit
                                    <span class="material-symbols-outlined dumble">
                                    exercise
                                    </span>
                                </h2>
                      </div>
                   

                      <div className="notify">
                            <span class="material-symbols-outlined">
                            notifications
                            </span>

                            <span class="material-symbols-outlined">
                            mail
                            </span>

                            <span class="material-symbols-outlined">
                            account_circle
                            </span>
                      </div>

                 </div>

                 <div className="sec3">
                        <div className="subUser">
                          <p>  subscribers</p>
                            <p>{sub.length}</p>
                        </div>
                        <div className="subUser">
                        <p>  Users</p>
                            <p>{users.length}</p>
                        </div>
                        <div className="subUser">
                            administrator
                        </div>
                      </div>
        </div>
    </div>
  )
}

export default Admin