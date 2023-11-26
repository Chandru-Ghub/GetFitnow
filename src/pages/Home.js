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
import { useNavigate } from 'react-router-dom';


const Home = ({userDetail}) => {

  const myuser = useContext(userContext)
  const formData = myuser.formData
  // const [userDetail,setUserDetail] = useState('')
  // console.log(wind);
  // const token = window.localStorage.getItem('token')
  // const isAdmin = window.localStorage.getItem('status')

  
  // useEffect(()=>{

  //   axios.post('http://localhost:3400/getUser',{token})
  //   .then(msg => {
  //       // console.log(msg.data)
  //        setUserDetail(msg.data)
       

  //       // if(msg.data =='data added') setShowmail(!showmail)
  //   })
  //   .catch(err => console.log(err))
    


  // },[])

  
   
  const navigate = useNavigate()
  const navigateTo =()=>{
    console.log('first')
    navigate(!userDetail ? '/register' : !formData?'/formdata': `/user/${userDetail._id}`)

  }

  return (
    <div className='mainhome'>
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
                <button onClick={navigateTo} className="btnjoin">
                  FREE TRY-OUT TRAINING
                </button>
              </div>
          </div>
      </div>
      
    </div>

    <Program userDetail = {userDetail}/>
    <BmiCalculator/>
    <WhyUs userDetail = {userDetail}/>
    <NewsLetter/>
    <Plans userDetail = {userDetail}/>
    <Footer/>


    </div>
   
  )
}

export default Home