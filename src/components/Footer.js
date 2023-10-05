import React from 'react'
import '../styles/Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      {/* top */}

      <div className="footer-top">
          <div className="location">
                   <span class="material-symbols-outlined">
                   location_on
                   </span>
            123 JP street Mettur Dam , Salem TN
          </div>
          <div className="call">
          <span class="material-symbols-outlined">
            phone_iphone
            </span>
            6322286595 | 9865711754
          </div>
          <div className="mail">
          <span class="material-symbols-outlined">
          mail
          </span>
            Support:getfitnow@gmail.com
          </div>
      </div>




      {/* Midsectio */}
      <div className="footermid">
              <div className="mid1">
                    <div className="flogo">
                      <h2>
                          GETFit
                          <span class="material-symbols-outlined dumble">
                          exercise
                          </span>
                      </h2>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, unde voluptatum. Non provident, beatae iste doloribus perspiciatis nisi reprehenderit, magni enim labore eum quod ad alias deleniti aperiam aut vitae.
                    </p>
              </div>
              
            <div className="mid2">
                  <h2>Useful links</h2>

                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Plans</li>
                    <li>Info</li>
                    <li>Contact</li>
                  </ul>
            </div>

            <div className="mid3">
                <h2>Support</h2>

                <ul>
                  <li>Login</li>
                  <li>My account</li>
                  <li>Subscribe</li>
                  <li>Contact</li>
                  <li>Join</li>
                </ul>
            </div>

        <div className="mid4">
          <h2>Tips & Guides</h2>

          <div className="tip1">

            <p>Physical fitness may help prevent depression, anxiety</p>

            <p className="light"> 3 min read | 20 Comment</p>

            <hr />
          </div>
          <div className="tip1">

            <p>Fitness: The best excercise to lose belly fat and tone up..</p>

            <p className="light"> 3 min read | 20 Comment</p>

         
          </div>
        </div>
      </div>
      <div className="footer-end">
        <hr />
        <div className="copy">
          Copyright &copy;2023 All rights reserved <span> | </span>Designed with 💚 by <span>Chandru</span> 
        </div>
      </div>
    </div>
  )
}

export default Footer