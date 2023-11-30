import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminNavbar from './AdminNavbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { authAxios } from '../../axiosInterceptros/AxiosInterceptors'

const UpdateUser = () => {

    const {id}  = useParams()
    const [name,setname] = useState('')
    const [user,setUser] = useState('')
    const [email,setEmail] = useState('')
    const [lastName,setLastname] = useState('')
    const navigate = useNavigate()
    // console.log(id)

    const handleUpdate=(e)=>{

        e.preventDefault();
        console.log('send')
            authAxios.put('/admin/updateUsers/'+id,{name,lastName,email})
            .then(res => 
                  {     
                    alert('User detail has been updated')
                      navigate('/userdetail')
                      window.location.reload()
                      
                  })
               
              
            .catch(err => console.log(err))
         
    }
    useEffect(()=>{

    
            
      authAxios.get('/getUserById/'+id)
      .then(msg => {
          setUser(msg.data)
          setname(msg.data.name)
          setLastname(msg.data.lastName)
          setEmail(msg.data.email)
          
      })
      .catch(err => console.log(err))
         
    },[id])
  return (

    <div className='adminContainer'>
       
       <AdminSidebar/>
       <div className="mainCon">
         <AdminNavbar/>
         <h2 className='detail'>USER DETAILS</h2>

         <div className="userInfo">
                <h3 className='subCat'> Details</h3> 
                <ul className='perUser'>
                        <li><p>User ID<span>:</span></p><span>{user._id}</span></li>
                        <li><p>User Name<span>:</span></p><span>{user.name}</span></li>
                        <li><p>Last Name<span>:</span></p><span>{user.lastName}</span></li>
                        <li><p>Email ID<span>:</span></p><span>{user.email}</span></li>
                        {/* <li>Account active:{(user.createdAt.slice(0,10))}</li> */}
                </ul>
          </div>
        
      <div className="editform">
            <h3 className='subCat'> Edit</h3> 
            <form className='editUser' onSubmit={handleUpdate} >

            <input onChange={(e)=>setname(e.target.value)} value={name} type="text" />
            <input onChange={(e)=>setLastname(e.target.value)}  value={lastName} type="text" />
            <input onChange={(e)=>setEmail(e.target.value)}  value={email} type="text" />
            <button type='submit'>UPDATE</button>
            </form>

      </div>

         
        </div>
        <h1 className="title2">
            GET<span className='titlegreen'>Fit</span>
          </h1>

    </div>
  )
}

export default UpdateUser