import React from 'react'
import '../styles/Register.css'
import bgimg from '../Images/img3.jpg'
const Register = () => {
  return (
    <div className='register'>
        <div className="registercon">
            {/* <h3>SHOPYddddddddddd</h3> */}
            <div className="regtitle">
            SIGN UP
            </div>
            
            <form action="" className="registerdata">
                <div className="leftform rfm">
                    <input type="text" className="name" placeholder='name' />
                    <input type="text" className="password" placeholder='password' />
                </div>
                <div className="rightform rfm">
                        <input type="text" className="lastname" placeholder='last name' />
                        <input type="text" className="email" placeholder='email' />            
                </div>
            </form>

            <div className="policy">
                By creating an account i consent to the processing of my personal data in accordance withe the <span className='
                spanpolicy'
                >PRIVACY POLICY</span>
            </div>
            <div className="createaccountbtn">
                <button className='btncrtacc'>
                    REGISTER
                </button> <span>OR</span>
                <button className='btncrtacc lgin'>
                  LOGIN
                </button>
            </div>
            
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
        <div className="bakArrrow bckarw">
        <span class="material-symbols-outlined">
            chevron_left
        </span>
        <p>Back</p>
                                        
        </div>
    </div>
  )
}

export default Register