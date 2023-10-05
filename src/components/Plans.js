import React, { useState } from 'react'
import '../styles/Plans.css'
import img1 from '../Images/img7.jpg'
const Plans = () => {
    // const [price,setPrice] = useState();
    // const [plan,setPlan]  = useState();
    const [qty,setQty] = useState([

        {price:40,
            plane : 'Basic plan'
        },
        {price:59,
            plane : '6 month unlimited'
        },
        {price:99,
            plane : '12 month umlimited'
        },
    ]);

    console.log(qty);
  return (
          
            <div className='plans'>

                <h2 className='ttle1'>OUR PLANS</h2>
                <h2 className=' price2'>CHOOSE YOUR <span>PRICING PLAN</span></h2>
                <div className="priceContainer">
                {qty.map(data=>
                        <div className="silver">

                            <p className="basicplan">
                                {data.plane}
                            </p>

                            <div className="price">
                                <p className="rupee">${data.price}</p>
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