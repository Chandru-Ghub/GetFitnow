import React, { useContext, useState } from 'react'
import '../styles/Plans.css'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom'

// import img1 from '../Images/img7.jpg'
const Plans = ({userDetail}) => {
    const myuser = useContext(userContext)
    const formData = myuser.formData
    const navigate = useNavigate()
    const [qty] = useState([

        {price:2000,
            plane : 'Basic plan'
        },
        {price:8000,
            plane : '6 month unlimited'
        },
        {price:15000,
            plane : '12 month umlimited'
        },
    ]);


    const navigateTo =()=>{
        
        navigate(!userDetail ? '/register' : !formData?'/formdata': `/user/${userDetail._id}`)
    
      }
    // console.log(qty);
  return (
          
            <div className='plans' id='plans'>

                <h2 className='ttle1'>OUR PLANS</h2>
                <h2 className=' price2'>CHOOSE YOUR <span>PRICING PLAN</span></h2>
                <div className="priceContainer">
                {qty.map((data,i)=>
                        <div key={i} className="silver" onClick={navigateTo}>

                            <p className="basicplan">
                                {data.plane}
                            </p>

                            <div className="price">
                                <p className="rupee">₹{data.price}</p>
                                <p className="class">SINGLE CLASS</p>
                            </div>
                            <ul className='listPlan'>
                                <li>Free riding</li>
                                <li>Unlimited equipments</li>
                                <li>Personal trainer</li>
                                <li>Weight losing classes</li>
                                <li>Month to month</li>
                                <li>Np time restriction</li>
                            </ul>

                            <button className="enroll">
                            ENROLL NOW
                        </button>
                        </div>
                )}
               </div>
                
                
            </div>
         

  )
}

export default Plans