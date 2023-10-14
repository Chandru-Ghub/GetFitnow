import React, { useContext, useEffect, useState } from 'react'
import '../styles/Home.css'
import BmiCalculator from '../components/BmiCalculator';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Plans from '../components/Plans';
import Program from '../components/Program';
import WhyUs from '../components/WhyUs';
import  {userContext } from '../App';
import axios from 'axios';


const Home = ({userDetail}) => {

  // const myuser = useContext(userContext)
  // const [userDetail,setUserDetail] = useState('')
  // console.log(wind);
  // const token = window.localStorage.getItem('token')
  // const isAdmin = window.localStorage.getItem('status')
  // console.log(isAdmin);
  
  // useEffect(()=>{

  //   axios.post('http://localhost:3400/getUser',{token})
  //   .then(msg => {
  //       // console.log(msg.data)
  //        setUserDetail(msg.data)
       

  //       // if(msg.data =='data added') setShowmail(!showmail)
  //   })
  //   .catch(err => console.log(err))
    


  // },[])


  return (
    <div>
      <Navbar userDetail = {userDetail}/>
    <div className='home'>
        <div className="cover">
          <h1 className="title">
            GET<span className='titlegreen'>Fit</span>
          </h1>

          <div className="homecnt">
              <div className="temp">
                <span className="build">BUILD</span>YOUR BODY
              </div>
              <div className="temp2">
                <span className="trans">TRANSFORM</span>YOUR LIFE
              </div>
              <div className="temp3">
                      WE PROVIDE OUR BEST OPPORTUNITY AND QUALIFIED
                      TRAINER FOR BEST WORKOUT YOURSELF AS YOU WANT!
              </div>
              <div className="join">
                <button className="btnjoin">
                  FREE TRY-OUT TRAINING
                </button>
              </div>
          </div>
      </div>
      
    </div>

    <Program/>
    <BmiCalculator/>
    <WhyUs/>
    <NewsLetter/>
    <Plans/>
    <Footer/>


    </div>
   
  )
}

export default Home