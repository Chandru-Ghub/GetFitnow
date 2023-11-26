import React, { useContext, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminNavbar from './AdminNavbar'
import AdminUsers from './AdminUsers'
import { userContext } from '../../App'
import axios from 'axios'

const OurSubscribers = () => {
  const data = useContext(userContext)
  const sub = data.sub
  const users = data.user
  const [query,setQuery] = useState('') 

  const deleteUser = (id)=>{
    console.log(id)
    const warning = window.confirm(' !⚠️ Subscriber has been removed from the DataBase')
    if(warning){
       axios.delete('http://localhost:3400/admin/deleteSubscriber/'+id)
    .then(res => {
      // console.log(res,'RES')
      window.location.reload()
      alert('Subscriber has been Deleted')
  })
    .catch(err => console.log(err,'err')) } 
 }

 // Filter using Normal method
 const filt=(g)=>{
  return g.filter(data => data.email.toLowerCase().includes(query.toLowerCase())  )
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
                                  
                                      <input onChange={(e)=>setQuery(e.target.value)} type="text" placeholder='Search subscribers...' />
                                        <span class="material-symbols-outlined">
                                        search
                                        </span>
                    
                                  </div>
                                 <h2 className='detail'>SUBSCRIBERS</h2>
                      </div>
       
                  
                <div>
                      <table class=" ttle table table-hover">
                            <thead>
                                  <tr  className='thead'>
                                    <th className='sn'>SI.NO</th>
                                    <th className='sn'>Email ID</th>
                                    <th className='sn'>Join Date</th>
                                    <th className='sn'>Action</th>
                                  </tr>
                            </thead>

                            {sub.length && filt(sub).map((data,i)=>
                            <tbody>
                                  <tr className='tblist'>
                                        <th className='tid'>{i=i+1}</th>
                                        <td className='temail'>{data.email}</td>
                                        <td className='temail'>{(data.createdAt).slice(0,10)}</td>
                                        <td className='tbtn'>
                                          
                                          <button onClick={()=>{deleteUser(data._id)}}>DELETE</button>
                                          <button>Send Mail</button>
                                          
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

export default OurSubscribers