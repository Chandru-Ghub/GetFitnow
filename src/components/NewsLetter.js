import React, { useState } from 'react'
import '../styles/NewsLetter.css'
import axios from 'axios'
const NewsLetter = () => {

  const[sub,setSub] = useState('')
  const[error,setError] = useState(false)

  const subscribe =(e)=>{
    e.preventDefault()
    console.log(sub);
    let ch = sub.includes('.co') && sub.includes('@')
    console.log(ch);
    ch?setError(false):setError(true)

    axios.post('http://localhost:3400/sub',{sub})
    .then(res=>console.log(res))
    .catch(err =>console.log(err))
    
   

  }
  return (
    <div className='nws'>
          <h1 className="newslogo">
            ARN<span className='titlegreen'>OLD</span> <span className='way'></span>
          </h1>
            <div className='newsletter'>
                    <h2>
                        NewsLetter
                    </h2>
                        <p className="newsdesc">
                                Get timely updates join our team and shape
                        </p>
                        <div className="forms">
                            <form className='btnsub' onSubmit={subscribe} action="" >
                                <input className='inpnews' onChange={(e)=>setSub(e.target.value)} type="text" placeholder='Enter enail'/>
                                <button type='submit' className='btnnews'>Subscribe</button>
                            </form>
                           { error? <p style={{color:'wheat'}}>Enter valid email</p>:null}
                        </div>
                
            </div>

    
    </div>
  )
}

export default NewsLetter