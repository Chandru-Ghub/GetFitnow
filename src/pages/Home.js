import React from 'react'
import '../styles/Home.css'
const Home = () => {
  return (
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
  )
}

export default Home