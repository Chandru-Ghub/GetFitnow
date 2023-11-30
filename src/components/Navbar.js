import React, { useContext, useState } from 'react'
import '../styles/Navbar.css'
import{HashLink as Link} from 'react-router-hash-link'
import { userContext } from '../App'
import {motion,useScroll} from 'framer-motion' 

const Navbar = ({userDetail}) => {

      // Getting user details from the 
      const {scrollYProgress} = useScroll()
      const userData = useContext(userContext)
      const formData = userData.formData 
      const userToken = window.localStorage.getItem('token') 
      const userStatus = window.localStorage.getItem('status') 
      const[open,setOpen] = useState(true)
   
  return (
    <div className='navbar'>
       <motion.div
                    style={{
                        scaleX:scrollYProgress,
                        position:'fixed',
                        top:62,
                        right:0,
                        left:0,
                        height:2,
                        background:'teal',
                        transformOrigin:'0%'

                    }}
                ></motion.div>
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
                <Link to='/#program' smooth style={{color:'inherit'}}>
                  Program
                </Link>
            </li>
            <li>
                <Link to='/#bmi' smooth style={{color:'inherit'}}>
                  BMI
                </Link>
            </li>
        
            <li>
                <Link to='/#plans' smooth style={{color:'inherit'}}>
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
                {formData? <img className='navimg' src={'https://getfit-gktq.onrender.com/images/'+formData.image} alt="images"  />
                : <span className="material-symbols-outlined profile">
                account_circle
                </span> }
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