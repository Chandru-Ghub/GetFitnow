import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const User = () => {

    const {id} = useParams()
    const [user,setUser] = useState('')
    const navigate = useNavigate()
    const handleLogout =()=>{
        window.localStorage.clear('token');
        window.localStorage.clear('user');
        console.log('cleared');
        navigate('/')
    }

    useEffect(()=>{

      axios.get('http://localhost:3400/getUserById/'+id)
      .then(msg => {
          console.log(msg.data)
          setUser(msg.data)
          // if(token) setUserDetail(msg.data)
         
  
          // if(msg.data =='data added') setShowmail(!showmail)
      })
      .catch(err => console.log(err))
      
  
  
    },[])
    
  return (
    <div>
        <button onClick={handleLogout}>logout</button>

        <div>
          <ul>
            <li>{user._id}</li>
            <li>{user.name}</li>
            <li>{user.lastName}</li>
            <li>{user.email}</li>
          </ul>
        </div>
    </div>
  )
}

export default User