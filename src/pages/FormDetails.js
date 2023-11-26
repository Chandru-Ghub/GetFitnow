import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Footer from '../components/Footer';
import '../styles/FormData.css'

const FormDetails = () => {


    const[file,setFile] = useState();
    const[err2,setErr2] = useState(false);
    const[success,setSuccess] = useState(false);
    const navigate = useNavigate()
     // formik
     const formik = useFormik({

        initialValues:{
            name:'',
            lastName:'',
            email:'',
            dateOfBirth:'',
            bmi:'',
            gender:'',
            plan:'',
            program:[],

        },

        validationSchema: Yup.object({

                name:Yup.string().max(10,'Name must be 10 characters or less')
                .required('Required'),

                lastName:Yup.string().min(1,'minimum 1 characters required')
                .required('Required'),

                email:Yup.string().email('Invalid email address')
                .required('Required'),

                dateOfBirth:Yup.string()
                .required('Required'),

                bmi:Yup.number().min(3,'BMI must be 2 digit')
                .required('Required'),
               
        }),
        onSubmit:(values)=>{
            // resetForm({values :''})

           const {name,email,dateOfBirth,lastName,gender,plan,bmi,program}= values;
        //    console.log(name,email,dateOfBirth,lastName,gender,plan,bmi,program);
      
           const formData = new FormData();
           
           formData.append('name',name)
           formData.append('email',email)
           formData.append('lastName',lastName)
           formData.append('gender',gender)
           formData.append('dateOfBirth',dateOfBirth)
           formData.append('plan',plan)
           formData.append('bmi',bmi)
           formData.append('program',program)
           formData.append('file',file)
          
        console.log(plan,program)
        if(plan && program.length && gender){ 
            
            setErr2(false)  
        axios.post('http://localhost:3400/userFormData',formData)
        .then(msg => {
            // console.log(msg)
            msg.data == 'success' && setSuccess(true)
        })
        .catch(err => console.log(err))
        }
        else{

            console.log('error')
            setErr2(true)
        }
    }
    })




  return (
    <div className='formDataback' >
        {/* <div className="videoback">
            <video src=""></video>
        </div> */}
            { success ? <div className="registerd">
                
           
           <div className="flogo">
                        <h2>
                            GETFit
                            <span class="material-symbols-outlined dumble">
                            exercise
                            </span>
                        </h2>
                        <p>
                        Congratulations !
                </p>
            <div>your plan has been activated check your mail</div>
            <button onClick={()=> navigate('/')}>Got It</button>
            </div> 
             
        </div> : null}
    <div className='formout'>
        <h3>Personal Form Data </h3>
        <div className=" grn">
           <div className='timing' >
              <p>TIMING</p>
              <marquee className='marq' behavior="scroll" scrolldelay ='150' direction="side">
              <span>MORNING </span>  - 5AM tO 10AM__  <span>EVENING </span>  - 5PM to 9PM__ <span>SUNDAY </span>HOLIDAY
              </marquee>
            </div>
           </div>
        <form  onSubmit={formik.handleSubmit} >
            <div className='persinfo'>
               
                        <div>    
                            <label htmlFor="name">Name</label>
                                <input  value={formik.values.name}   className='inp' name='name' type="text" onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} placeholder='Enter Name'/>
                                    { formik.touched.name && formik.errors.name?
                            <p  className='err'> <span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.name}</p>:null}
                        </div>

                        <div>    
                            <label htmlFor="lastname">Last Name</label>
                                <input  value={formik.values.lastName}   className='inp' name='lastName' type="text" onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} placeholder='Enter Last Name'/>
                                    { formik.touched.lastName && formik.errors.lastName?
                            <p  className='err'> <span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.lastName}</p>:null}
                        </div>

                        <div>    
                            <label htmlFor="email">Email ID</label>
                                <input  value={formik.values.email}   className='inp' name='email' type="text" onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} placeholder='Email ID'/>
                                    { formik.touched.email && formik.errors.email?
                            <p  className='err'> <span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.email}</p>:null}
                        </div>

                        <div>    
                            <label htmlFor="dateOfBirth">D.O.B</label>
                                <input  value={formik.values.dateOfBirth}   className='inp' name='dateOfBirth' type="date" onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} placeholder='Enter D.O.B'/>
                                    { formik.touched.dateOfBirth && formik.errors.dateOfBirth?
                            <p  className='err'> <span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.dateOfBirth}</p>:null}
                        </div>

                        <div>    
                            <label htmlFor="bmi">BMI</label>
                                <input  value={formik.values.bmi}   className='inp' name='bmi' type="text" onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} placeholder='Body Mass Index'/>
                                    { formik.touched.bmi && formik.errors.bmi?
                            <p  className='err'> <span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.bmi}</p>:null}
                        </div>
                        
                        <div className='pic'>    
                            <label htmlFor="bmi">Profile Picture</label>
                                <p className="file">
                                <input type="file" name='pic'  onChange={(e)=>setFile(e.target.files[0])} />
                                </p>
                        </div>


            </div>  
            <div className='radio'>

                <label htmlFor='gender'>Gender</label>
                    <div className="gender">
                            <div className="gen male">
                                    <input  value='male'    className='inp' name='gender' type="radio" onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} placeholder='Body Mass Index'/>Male
                            </div>

                            <div className="gen female">
                                    <input  value='female'  className='inp' name='gender' type="radio" onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} placeholder='Body Mass Index'/>Female 
                            </div>

                            <div className="gen other">  
                                    <input  value='other'  className='inp' name='gender' type="radio" onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} placeholder='Body Mass Index'/>Othersss  
                            </div>
                    </div>
           
            </div>

           <div className="plansanddetails">
                
                        <div className='drop'>
                            <label for="pet-select">Choose your plan:</label>

                            <select onChange={formik.handleChange} name="plan" id="pet-select">
                            <option value="">-- Our Best plan--</option>
                            <option value="Basic Plan">Basic Plan</option>
                            <option value="Half-year Plan">Half-year Plan</option>
                            <option value="Full-year Plan">Full-year Plan</option>
                            </select>
                        </div>

                        <div className="planDetails">
                        <aside>
                                <details>
                                    <summary>
                                        Plan OverView   
                                        <span class="material-symbols-outlined">
                                                        arrow_drop_down
                                                        </span>                    
                                    </summary>
                                        <p> abcd</p>
                                        <p> abcd</p>
                                        <p> abcd</p>
                                </details>
                        </aside>
                        </div>
           </div>

            <div className='checkbox'>
                <h4>Choose your Program</h4>

               <div className="cbox" >
                        <div className='cb'>
                                <input onChange={formik.handleChange} type="checkbox" id="checkbox" value='Flex Muscle' name = 'program'/>
                                <label htmlFor="checkbox">Flex Muscle</label>
                            </div>

                            <div className='cb'>
                                <input type="checkbox" id="checkbox" onChange={formik.handleChange} value='Fat Loss' name = 'program' />
                                <label htmlFor="checkbox">Fat Loss </label>
                            </div>

                            <div className='cb'>
                                <input type="checkbox" id="checkbox" onChange={formik.handleChange} value='Cardio Excercise' name = 'program'  />
                                <label htmlFor="checkbox">Cardio Excercise </label>
                            </div>

                            <div className='cb'>
                                <input type="checkbox" id="checkbox" onChange={formik.handleChange} value='Basic Yoga' name = 'program' />
                                <label htmlFor="checkbox">Basic Yoga </label>
                            </div>

                            <div className='cb'>
                                <input type="checkbox" id="checkbox" onChange={formik.handleChange} value='Weight Lifting' name = 'program' />
                                <label htmlFor="checkbox">Weight Lifting </label>
                            </div>
                </div> 
    
            </div>
            <p className='err2'>
            {err2?'⚠️ plan or Program cannot be empty':null}
          </p>
        <div className='frmbtn'>  
            <button className='btnjoin' type='submit'>Submit</button>
      </div>
      
        </form>

        <h1 className="title4">
            GET<span className='titlegreen'>Fit</span>
          </h1>
          
    </div>
         <Footer/>
    </div>
  )
}

export default FormDetails