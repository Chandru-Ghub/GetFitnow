import React, { useContext, useState } from 'react'
import '../styles/Navbar.css'
import {Link } from 'react-router-dom'
import { userContext } from '../App'

    

const Navbar = ({userDetail}) => {

      // Getting user details from the  
    //   const userName = useContext(userContext)
      const userToken = window.localStorage.getItem('token') 
      const userStatus = window.localStorage.getItem('status') 
      // const CURRENT_USER = userDetail.data.isAdmin;
      console.log(userStatus);
      const[open,setOpen] = useState(true)
   
  return (
    <div className='navbar'>
        <div className="logo">
            <h2>
                GETFit
                <span class="material-symbols-outlined dumble">
                exercise
                </span>
            </h2>
            <div className="timingContainer">
           <div className='timing' >
              <p>TIMING</p>
              <marquee className='marq' behavior="scroll" scrolldelay ='150' direction="side">
              <span>MORNING </span>  - 5AM tO 10AM__  <span>EVENING </span>  - 5PM to 9PM__ <span>SUNDAY </span>HOLIDAY
              </marquee>
            </div>
           </div>
        </div>
        
        <ul className={open?'navs':'showmenu'}>
            <li>
                <Link style={{color:'inherit'}}>
                  About
                </Link>
            </li>
            <li>
                <Link style={{color:'inherit'}}>
                plans
                </Link>
            </li>
           {
            userStatus == 'true'? <li>
            <Link to={'admin'} style={{color:'inherit'}}>
            Dashboard
            </Link>
        </li>: null
           }
            { !userToken?
             <>
            <li>
                <Link to={'login'}  style={{color:'inherit'}}>
                signin
                </Link>
            </li>
            </>
            
            :null}

            {userToken ?
            <li>
                <Link to={`user/`+ userDetail._id}  style={{color:'inherit'}}>
               
                              
                <p className='nameUser'>
                <span className="material-symbols-outlined profile">
                  account_circle
                  </span>
                <span>{userDetail.name}</span>
                </p>
                  
                </Link>
            </li> : null}
            </ul>
           <div className='bnm' onClick={()=>setOpen(!open)} >
           {open?<span  style={{color:'white'}} className="material-symbols-outlined dumble bur">
                menu
                </span>:<span  style={{color:'white'}} className="material-symbols-outlined dumble bur">
                close
                </span>}
           </div>

            
      
    </div>
  )
}

export default Navbar