
import React, { useContext } from 'react'
// import {Link, NavLink} from 'react-router-dom'
import '../styles/Register.css'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../App'
import Footer from '../components/Footer'

const Login = () => {
    
    // Getting user details from the  
    const userType = useContext(userContext)
    const navigate  = useNavigate()
   

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
           const {name,password}= values;
           console.log(name,password);
        
        axios.post('http://localhost:3400/auth/login',{name,password})
        .then(msg => {
            const isAdmin = msg.data.data.isAdmin;
            userType.setUserType(msg.token)
            window.localStorage.setItem('token',msg.data.token)
            window.localStorage.setItem('status',isAdmin)
            navigate('/')
            window.location.reload()

            // if(msg.data =='data added') setShowmail(!showmail)
        })
        .catch(err => console.log(err))
        }
    })

  return (
    <div className='login'>
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
                <p>Forgot Password?</p>
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