import React, { useEffect, useState } from 'react'
import { userData } from './Detail'
import '../styles/Search.css'
import axios from 'axios';
import { authAxios } from '../axiosInterceptros/AxiosInterceptors';
const Serach = () => {

  const[query,setQuery] = useState('');
  const[user,setUser] = useState('');
  // console.log(userData)
  // console.log(userData.filter((a) =>a.name.toUpperCase()))
 const keys = ['name','lastName','email']


  // Filter using Normal method
  // const filt=(g)=>{
  //  return g.filter(data => data.name.toLowerCase().includes(query.toLowerCase()) || 
  //                          data.family_name.toLowerCase().includes(query.toLowerCase()) || 
  //                          data.email.toLowerCase().includes(query.toLowerCase())  )
  // }
      
  // FILTER using some method
  // const filt=(data)=>{
  //   return data.filter(item => keys.some(key => item[key].toLowerCase().includes(query.toLowerCase())) )
  //  }
  
  useEffect(()=>{

   const fetch = ()=>{
    authAxios.get('/admin/users/?q='+ query.toLowerCase())
    .then(msg => {
        // console.log(msg)
         setUser(msg.data)
       
  
        // if(msg.data =='data added') setShowmail(!showmail)
    })
    .catch(err => console.log(err))
   }
   if(query.length == 0 || query.length == 3) fetch()
  },[query])

  return (
    <div className='Appp'>
        
        <input onChange={(e)=>setQuery(e.target.value)} type="text" placeholder='search...' className='search' />
      <p>{query}</p>
        <div className="data">
          {/* {filt(userData).map((a,i)=> */}
          {user && user.map((a,i)=>
              <ul>
                <li>{a.name}</li>
                <li>{a.lastName}</li>
                <li>{a.email}</li>
              </ul>
          )}
        </div>
    </div>
  )
}

export default Serach