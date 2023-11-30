import React, { useContext, useState } from 'react'
import { userContext } from '../../App'
import AdminNavbar from './AdminNavbar'
import AdminSidebar from './AdminSidebar'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { authAxios } from '../../axiosInterceptros/AxiosInterceptors'
const AdminUsers = () => {
  const data = useContext(userContext)
  const sub = data.sub
  const users = data.user
  const navigate = useNavigate()
  const [query,setQuery] = useState('')

  const deleteUser = (id)=>{
    console.log(id)
    const warning = window.confirm(' !⚠️ Users has been removed from the DataBase')
    if(warning){
       authAxios.delete('/admin/deleteUser/'+id)
    .then(res => {
      // console.log(res,'RES')
      window.location.reload()
      alert('User has been Deleted')
  })
    .catch(err => console.log(err,'err')) } 
 }

  // Filter using Normal method
  const filt=(g)=>{
   return g.filter(data => data.name.toLowerCase().includes(query.toLowerCase()) || 
                           data.email.toLowerCase().includes(query.toLowerCase())  )
  }
      

  return (

              <div className='adminContainer'>
                    
                      <AdminSidebar/>
                      <div className="mainCon">
                                <AdminNavbar/>

                                <div>
                                        <div className="userdetails">

                                                 <div className="searchUser">
                                                          <div className="adminSearch">
                                                          
                                                          <input onChange={(e)=>setQuery(e.target.value)}  type="text" placeholder='Search Users...' />
                                                              <span class="material-symbols-outlined">
                                                              search 
                                                              </span>
                                                  
                                                      </div>
                                                      <h2 className='detail'>USERS</h2>
                                                 </div>
                                                <div>
                                                    <table class=" ttle table table-hover">
                                                          <thead>
                                                                <tr  className='thead'>
                                                                    <th className='sn'>#</th>
                                                                    <th className='sn'>First</th>
                                                                    <th className='sn'>Last</th>
                                                                    <th className='sn'>Action</th>
                                                                </tr>
                                                          </thead>
                                                              {users.length && filt(users).map((data,i)=>
                                                              <tbody>
                                                                  <tr className='tblist'>
                                                                        <th className='tid'>{i=i+1}</th>
                                                                        <td className='tname'>{data.name}</td>
                                                                        <td className='temail'>{data.email}</td>
                                                                        <td className='tbtn'>
                                                                          {/* <button onClick={()=>viewUser(data._id)}>VIEW</button> */}
                                                                          <Link to={`/updateuser/${data._id}`}><button>VIEW / EDIT</button></Link>
                                                                          <button onClick={()=>deleteUser(data._id)}>DELETE</button>
                                                                        </td>
                                                                  </tr>
                                                          </tbody>)}
                                                    </table>
                                                        
                                                   </div>
                                        </div> 
                                  </div>

                          
                        </div>
                        <h1 className="title2">
                                  GET<span className='titlegreen'>Fit</span>
                                </h1>

              </div>
  )
}

export default AdminUsers