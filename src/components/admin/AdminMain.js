import React, { useContext } from 'react'
import AdminNavbar from './AdminNavbar'
import AdminSidebar from './AdminSidebar'
import AdminUsers from './AdminUsers'
import { userContext } from '../../App'
// import 'bootstrap/dist/css/bootstrap.min.css';
const AdminMain = () => {
  const data = useContext(userContext)
  const sub = data.sub
  const users = data.user
  console.log(sub,users,'>>>>>');
  return (

    <div className='adminContainer'>
       
    <AdminSidebar/>
    <div className="mainCon">
      <AdminNavbar/>

      {/* <AdminUsers/>  */}
               
        
      </div>
  

    </div>
     
  
  )
}

export default AdminMain


  