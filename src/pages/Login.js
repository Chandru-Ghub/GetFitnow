
import React, { useContext, useState } from 'react'
// import {Link, NavLink} from 'react-router-dom'
import '../styles/Register.css'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../App'
import Footer from '../components/Footer'
import Backdrop from '@mui/material/Backdrop';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' 
import CircularProgress from '@mui/material/CircularProgress';
import { authAxios } from '../axiosInterceptros/AxiosInterceptors'

const Login = () => {
    
    // Getting user details from the  
    const userType = useContext(userContext)
    const navigate  = useNavigate()
    const [demo,setDemo] = useState(true)
    const [open,setOpen] = useState(false);
      // formik
      const formik = useFormik({

        initialValues:{
            name:'',
            lastName:'',
            email:'',
            password:''
        },

        validationSchema: Yup.object({

                name:Yup.string().max(10,'Name must be 10 characters or less')
                .required('Required'),

                password:Yup.string().min(5,'minimum 5 characters required')
                .required('Required')
               
        }),
        onSubmit:(values)=>{
            // resetForm({values :''})
            setOpen(true)
           const {name,password}= values;        
        authAxios.post('/auth/login',{name,password})
        .then(msg => {
            let data = msg.data
            if(data == 'wrong credential!' || data == 'user name not found!' ) {
                setOpen(false)
                toast.warning(data)
            }
            else{
                setOpen(false)
                toast.success('Login Successfull!')
                setTimeout(()=>{
                       const isAdmin = data.data.isAdmin;
                        userType.setUserType(msg.token)
                        window.localStorage.setItem('token',msg.data.token)
                        window.localStorage.setItem('status',isAdmin)
                        navigate('/')
                        window.location.reload()
                    navigate('/')
                },1000)
        }
            
   
                //  toast.warning(msg.data) 
            
           

            // if(msg.data =='data added') setShowmail(!showmail)
        })
        .catch(err => console.log(err))
        }
    })

  return (
    <div className='login'>
         {demo && <div className='demo'>
          
          <ul>
          <span onClick={()=>setDemo(!demo)} className="material-symbols-outlined">
            close
            </span>
            <li>
              <div>ADMIN</div>
              <p>UserName :  <span>admin</span></p>
              <p>Password  : <span>12345</span></p>
            </li>
            <li>
              <div>USER</div>
              <p>UserName :  <span>john</span></p>
              <p>Password  : <span>12345</span></p>
            </li>
          </ul>
      </div>}
            <ToastContainer
            position='top-right'
            />
              <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
  >
    <CircularProgress color="inherit" />
  </Backdrop> 
        <div className='register'>
        <div className="registercon loginpg">
            <h3>SHOPY</h3>
            <div className="regtitle">
                SIGN IN
            </div>
            <form onSubmit={formik.handleSubmit}>
            <div action="" className="registerdata">
                <div className="leftform rfm inplogin">
                   
                            <input  value={formik.values.name}   className='inp' name='name' type="text" onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                                placeholder='Enter name'/>

                            { formik.touched.name && formik.errors.name?
                            <p  className='err'> <span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.name}</p>:null}

                            <input  value={formik.values.password}   className='inp' name='password' type="password" onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                                placeholder='Enter password'/>

                            { formik.touched.password && formik.errors.password?
                            <p  className='err'> <span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.password}</p>:null}

                </div>
            </div>   
     

            <div className="forgotpass">
                <p >Forgot Password?</p>
                <p onClick={()=>navigate('/register')}>Create New Account</p>
            </div>
            <div className="createaccountbtn">
                <button type='submit' className='btncrtacc'>
                    LOGIN
                </button>
               
            </div>
            </form>
            <div onClick={()=>navigate('/')} className="bakArrrow bckarw">
        <span class="material-symbols-outlined">
            chevron_left
        </span>
        <p>Back</p>
                                        
        </div>
        <h1 className="title3">
            GET<span className='titlegreen'>Fit</span>
          </h1>
        </div>
    </div>
        <Footer/>
    </div>
  )
}

export default Login