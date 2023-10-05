import React from 'react'
import '../styles/Program.css'
const Program = () => {
  return (
    <div className='Program'>
            {/* <div className="seperator">
                    
            </div> */}
        <h2 className="progtitle">
            Our Program
        </h2>
        <h2 className="progbody">
            BUILD YOUR <span>BEST BODY</span>
        </h2>

        <div className="collectionProg">
            <div className="flex">
              
                    <span class="material-symbols-outlined icon">
                    exercise
                    </span>
                
                <h3 className='pgm'>Flex Muscle</h3>
                <p className="programdesc">
                    Creating tension that's temporarily marking the muscle fibers smaller or contracted.
                </p>
            </div>
            <div className="flex">
             
                    <span                   class="material-symbols-outlined icon">
                    cardiology
                    </span>
             
                <h3 className='pgm'>Cardio Excercise</h3>
                <p className="programdesc">
                  Excercise your heart rate up and keeps it up for a prolongrd period of time.
                </p>
            </div>
            <div className="flex">
               
                        <span class="material-symbols-outlined icon">
                        self_improvement
                        </span>
           
                <h3 className='pgm'>Basic Yoga</h3>
                <p className="programdesc">
                 Disphragmatic this is the most commom breathing technique you'll find in yoga.
                </p>
            </div>
            <div className="flex">
             
                        <span class="material-symbols-outlined icon ">
                        fitness_center
                        </span>
         
                <h3 className='pgm'>Weight Lifting</h3>
                <p className="programdesc">
                   Attempts a maximum weight single lift of a barbell loaded with weight plates
                </p>
            </div>
        </div>

    </div>
  )
}

export default Program