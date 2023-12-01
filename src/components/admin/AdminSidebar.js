import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../../App'

const AdminSidebar = () => {

    const navigate = useNavigate('') 
    // console.log(user,'>>>')
    const detail = useContext(userContext);
    const user = detail.userDetail
    const [show,setShow] = useState(true)
  return (
    <div>
          <div className="sec1">
              <div className={show?"sidebarAdmin":'sidebarAdminOn'}>
              <div className='adminDetail'>
                            <div className="adminlogo">
                            <span class="material-symbols-outlined">
                            account_circle
                            </span>
                            <p className='pp'>  Welcome Admin!</p>
                            <span onClick={()=>setShow(!show)}  class="material-symbols-outlined burgeradmin">
                              menu
                              </span>
                      
                            </div>
                              <p className='pp cc'> {user.name} <span onClick={()=>setShow(!show)}  class="material-symbols-outlined">
                              close
                              </span></p>
                              <p className='pp cc'> {user.email}</p>
                          </div>
                          <hr className='adminhr' />
                  <ul className='sidenav'>

                  <li  onClick={()=> navigate('/admin')}> <span class="material-symbols-outlined">
                    admin_panel_settings
                    </span><p className='pp'>AdminPage</p></li>
                    
                    <li onClick={()=> navigate('/')}> <span class="material-symbols-outlined">
                      Home
                      </span> <p className='pp'>Home</p></li>
                      
                    <li onClick={()=> navigate('/userdetail')}> <span class="material-symbols-outlined">
                      groups
                      </span> <p className='pp'>Users</p></li>

                    <li onClick={()=> navigate('/subscriberuser')}><span class="material-symbols-outlined">
                    loyalty
                    </span><p className='pp'>Subscribers</p></li>

                    <li><span class="material-symbols-outlined">
                      redeem
                      </span><p className='pp'>Offers</p></li>

                    <li> <span class="material-symbols-outlined">
                    notifications_active
                    </span><p className='pp'>Notification</p></li>

                    <li><span class="material-symbols-outlined">
                    settings
                    </span><p className='pp'>Settings</p></li>

                    <li><span class="material-symbols-outlined">
                    payments
                    </span><p className='pp'>Payments</p></li>

                    <li><span class="material-symbols-outlined">
                    logout
                    </span><p className='pp'>Logout</p></li>
                  </ul>

              </div>
        </div>
    </div>
  )
}

export default AdminSidebar