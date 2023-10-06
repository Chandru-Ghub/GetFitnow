
import React from 'react'
// import {Link, NavLink} from 'react-router-dom'
import '../styles/Register.css'
const Login = () => {
  return (
    <div className='login'>
        <div className='register'>
        <div className="registercon loginpg">
            <h3>SHOPY</h3>
            <div className="regtitle">
                SIGN IN
            </div>
            <form action="" className="registerdata">
                <div className="leftform rfm">
                    <input type="text" className="username" placeholder='username' />
                    <input type="text" className="password" placeholder='password' />
                </div>
               
            </form>

            <div className="forgotpass">
                <p>Forgot Password?</p>
                <p>Create New Account</p>
            </div>
            <div className="createaccountbtn">
                <button className='btncrtacc'>
                    LOGIN
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login