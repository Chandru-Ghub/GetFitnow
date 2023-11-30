import React, { useState } from 'react'
import '../styles/Register.css'
import bgimg from '../Images/img3.jpg'
import axios from 'axios'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import   { Link, NavLink, Router, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Backdrop from '@mui/material/Backdrop';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' 
import CircularProgress from '@mui/material/CircularProgress';
import { authAxios } from '../axiosInterceptros/AxiosInterceptors'
const Register = () => {

    const navigate  = useNavigate()
    const [open,setOpen] = useState(false);
    const [success,setSuccess] = useState('');

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

                lastName:Yup.string()
                .required('Required'),

                email:Yup.string().email('Invalid email address')
                .required('Required'),

                password:Yup.string().min(5,'minimum 5 characters required')
                .required('Required')
               
        }),
        onSubmit:(values)=>{
            // resetForm({values :''})
           const {name,lastName,email,password}= values;
           setOpen(true)
        
        authAxios.post('/auth/register',{name,lastName,email,password})
        .then(msg => {

                if(msg.data == 'Registerd Sucessfully'){
                    
                    toast.success(msg.data)
                    setOpen(false)
                    setTimeout(()=>{
                        navigate('/login')
                    },2000)
                }else{
                    toast.error(msg.data)
                }
           
        })
        .catch(err => console.log(err))
        }
    })
  return (
    <div>
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
        <div className="registercon">
            {/* <h3>SHOPYddddddddddd</h3> */}
            <div className="regtitle">
            SIGN UP
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div action="" className="register1" >
                    <div className="leftform rfm">

                        <input  value={formik.values.name}   className='inp' name='name' type="text" onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                                placeholder='Enter name'/>

                            { formik.touched.name && formik.errors.name?
                            <p  className='err'> <span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.name}</p>:null}
                        

                        <input  value={formik.values.email}   className='inp eemail' name='email' type="text" onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                                placeholder='Enter your email'/>

                            { formik.touched.email && formik.errors.email?
                            <p  className='err'> <span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.email}</p>:null}
                    </div>
                    <div className="rightform rfm">

                        <input  value={formik.values.lastName}   className='inp' name='lastName' type="text" onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                                placeholder='Enter last name'/>

                            { formik.touched.lastName && formik.errors.lastName?
                            <p  className='err'> <span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.lastName}</p>:null}

                        <input  value={formik.values.password}   className='inp pass' name='password' type="password" onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                                placeholder='Enter your password'/> 

                            { formik.touched.password && formik.errors.password?
                            <p  className='err'> <span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.password}</p>:null}        
                    </div>
                </div>

                <div className="policy">
                    <span style={{color:'red'}}>*</span> By creating an account i consent to the processing of my personal data in accordance withe the <span className='
                    spanpolicy'
                    >PRIVACY POLICY</span>
                </div>
                <div className="createaccountbtn">
                    <button className='btncrtacc' type='submit'>
                        REGISTER
                    </button> <span>OR</span>
                    <button  className='btncrtacc lgin' onClick={()=>navigate('/login')}>
                    LOGIN
                    </button>
                </div>
            </form>
        </div>
        {/* <div className="lhns">
            <p className="eng">
                English(USA)
            </p>
            <ul className="ft">
                <li>Help</li>
                <li>Privacy</li>
                <li>Terms</li>
            </ul>
        </div> */}

    
        <div onClick={()=>navigate('/')} className="bakArrrow bckarw" >
            <span class="material-symbols-outlined">
                chevron_left
            </span>
            <p >Back</p>
                                        
        </div>
        <h1 className="title3">
            GET<span className='titlegreen'>Fit</span>
          </h1>
    </div>
    <Footer/>
    </div>
  )
}

export default Register