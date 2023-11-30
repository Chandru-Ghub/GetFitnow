import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { userContext } from '../App';
import '../styles/User.css'
import Footer from '../components/Footer';
import { authAxios } from '../axiosInterceptros/AxiosInterceptors';
const User = () => {
    const userDetail = useContext(userContext)
    const formData = userDetail.formData
    const {id} = useParams()
    const [user,setUser] = useState('')
    const navigate = useNavigate()

    const handleLogout =()=>{
        window.localStorage.clear('token');
        window.localStorage.clear('user');
        navigate('/')
        window.location.reload();
    }

    useEffect(()=>{

      authAxios.get('/getUserById/'+id)
      .then(msg => {
          console.log(msg.data)
          setUser(msg.data)
      })
      .catch(err => console.log(err))
      
  
  
    },[user])
    
  return (
    <div>
        <h1 className="title5">
            <p className='titlegreen'>GETFit</p>
            <span class="material-symbols-outlined dumble">
                exercise
                </span>
                
          </h1> 
          <div className='lgout' onClick={handleLogout}>
                            <span   class="material-symbols-outlined">
                          logout
                          </span><p>logout</p>
                      </div>

      {!formData?<><div className='updatenow'> <div className="userInfo">
                              <h3 className='subCat'> User Info</h3> 
                              <ul className='perUser'>
                                      <li><p>User ID<span>:</span></p><span>{user._id}</span></li>
                                      <li><p>User Name<span>:</span></p><span>{user.name}</span></li>
                                      <li><p>Last Name<span>:</span></p><span>{user.lastName}</span></li>
                                      <li><p>Email ID<span>:</span></p><span>{user.email}</span></li>
                                      {/* <li>Account active:{(user.createdAt.slice(0,10))}</li> */}
                              </ul>
                              
                      </div>
                     
                      </div>
                      <p className="expiry">Update your plan and program soon To JOIN US!</p></>: null}

        {formData?<div className="userInformation">
          
              <ul>
                  <li className='imgdp'>
                      <div>
                          <img className='sendImage' src={'http://localhost:3400/images/'+formData.image} alt="images"  />
                            <p className='pp'>{formData.name} {formData.lastName}</p>
                      </div>
                    
                  </li>
                 <li className='imgdp2'>

                 <div className="userInfo">
                              <h3 className='subCat'> User Info</h3> 
                              <ul className='perUser'>
                                      <li><p>User ID<span>:</span></p><span>{formData._id}</span></li>
                                      <li><p>User Name<span>:</span></p><span>{formData.name}</span></li>
                                      <li><p>Last Name<span>:</span></p><span>{formData.lastName}</span></li>
                                      <li><p>Email ID<span>:</span></p><span>{formData.email}</span></li>
                                      {/* <li>Account active:{(user.createdAt.slice(0,10))}</li> */}
                              </ul>
                      </div>

                  <div className="userInfo">
                              <h3 className='subCat'> Plan Details</h3> 
                              <ul className='perUser'>
                                      <li><p>BMI<span>:</span></p><span>{formData.bmi}</span></li>
                                      <li><p>Gender<span>:</span></p><span>{formData.gender}</span></li>
                                      <li><p>Plan<span>:</span></p><span>{formData.plan}</span></li>
                                      <li><p>Joined<span>:</span></p><span>{formData.createdAt}</span></li>
                                      <li><p>Program<span>:</span></p><span>{formData.program && formData.program.map(prog =>
                                        
                                        <li>{prog}</li>)}

                                      
                                      </span></li>
                                     
                                      {/* <li>Account active:{(user.createdAt.slice(0,10))}</li> */}
                              </ul>
                      </div>

                 </li>
                
              </ul>
              <div className="expiry">You have 180 days there lets Do it!</div>
        </div>:null}
        <Footer/>
    </div>
  )
}

export default User