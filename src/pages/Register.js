import React from 'react'
import '../styles/Register.css'
const Register = () => {
  return (
    <div className='register'>
        <div className="registercon">
            <h3>SHOPY</h3>
            <div className="regtitle">
                CREATE AN ACCOUNT
            </div>
            <form action="" className="registerdata">
                <div className="leftform rfm">
                    <input type="text" className="name" placeholder='name' />
                    <input type="text" className="username" placeholder='username' />
                    <input type="text" className="password" placeholder='password' />
                </div>
                <div className="rightform rfm">
                        <input type="text" className="lastname" placeholder='last name' />
                        <input type="text" className="email" placeholder='email' />            
                        <input type="text" className="confirmpass" placeholder='confirm password' />
                </div>
            </form>

            <div className="policy">
                By creating an account i consent to the processing of my personal data in accordance withe the <span className='
                spanpolicy'
                >PRIVACY POLICY</span>
            </div>
            <div className="createaccountbtn">
                <button className='btncrtacc'>
                    CREATE ACCOUNT
                </button>
            </div>
        </div>
    </div>
  )
}

export default Register