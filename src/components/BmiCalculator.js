import React, { useState } from 'react'
import '../styles/Bmi.css'
import img1 from '../Images/img7.jpg'
const BmiCalculator = () => {
        const [height,setHeight] = useState('');
        const [weight,setWeight] = useState('');
        const [bmi,setBmi] = useState('');
        const [showChart,setshowChart] = useState(false);


        const showBmi = (e)=>{
                e.preventDefault()
                let h = height/100;
                let res = (weight/(h*h)).toFixed(1);
                setBmi(res)
        }
  return (
    <div className='bmi'>
    <div className='bmiinner'>
    <div className="bmicalc">

                        <div className="bmidata">
                                <h2 className="bmititle">Check your BMI</h2>

                                <p className="BMI">
                                Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. Enter your weight and height using standard or metric measures.
                                </p>

                                <form className='bmiform'  >
                                        <div className="inp">
                                                <input type="text" onChange={(e)=>setHeight(e.target.value)}  placeholder='Your height in centimeter' />
                                                <input type="text" onChange={(e)=>setWeight(e.target.value)}  placeholder='weight in kilogram' />
                                        </div>
                                        <div className="bmibtn">
                                                <button onClick={showBmi} className='leftbtn'>Check BMI</button>
                                        
                                        </div>
                                        <div className="bmiresult">
                                        {bmi ?<p>
                                                Your BMI is <span className='bmivalue'>{bmi}</span>
                                        </p>:null}
                                
                                                <div onClick={()=>setshowChart(!showChart)} className='chart'>
                                                BMI chart  <span class="material-symbols-outlined chartArrow">
                                                <span class="material-symbols-outlined">
                                                chevron_right
                                                </span>
                                                        </span>
                                                </div>
                                        </div>
                                </form>
                        {showChart? <div className='bmiChart'>
                                        {/* <img src="https://bxngclub.wpengine.com/wp-content/uploads/2022/06/bmi-and-weight-category.png" alt="" /> */}
                                        <table class=" ttle ttls table table-hover">
                                                          <thead>
                                                                <tr  className='thead'>
                                                                    <th className='sns'>BMI</th>
                                                                    <th className='sns'>categories</th>
                                                                </tr>
                                                          </thead>
                                                             
                                                              <tbody className='bmitabel'>
                                                                  <tr className='tblist'>
                                                                        <td className='tid'>less than 18.5</td>
                                                                        <td className='tname' style={{backgroundColor:'lightblue',color:'black'}}>Under weight</td>
                                                                  </tr>
                                                                  <tr className='tblist'>
                                                                        <td className='tname' >18.5 - 24.9</td>
                                                                        <td className='temail' style={{backgroundColor:'green',color:'white'}}>Healthy weight</td>
                                                                  </tr>
                                                                  <tr className='tblist'>
                                                                       
                                                                        <td className='temail'>25-29.9</td>
                                                                        <td className='tname' style={{backgroundColor:'yellow',color:'black'}}>Obese</td>
                                                                  </tr>
                                                          </tbody>
                                                    </table>
                                </div>:null}
                                </div>
        
                                </div>
                                <div className="bmiimg">
                                        <img src={img1} alt="" />
                                </div>
                
        </div>
       
    </div>
    
  )
}

export default BmiCalculator