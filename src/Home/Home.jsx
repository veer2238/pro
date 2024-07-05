import React from 'react'
import './Home.scss'
import img1 from '../Image/download.jpg'



const Home = () => {

  return (
    <div className='portfolio'>
         <div className="portfolio-left">
            
      

         </div>
         <div className="portfolio-right">

       
         <div className="portfolio-detail">
       <span>  <img src={img1} alt=''/></span>
            <span>Patel Nandani</span>
            <span>Full Stack Developer</span>
            <p>Responsible student with good Judgement, time
               management and a flexible schedule. Frequently
               praised as a hard-working by my peers, I can be
               relied upon to help your company achieve its goals.
               Reliable with a good work ethic and the ability to
               quickly adapt to new tasks and environments.
               Accomplished profession in planning, designing and
               implementing high-quality websites. Skilled in
               HTML, CSS, JavaScript, Reactjs . Proven ability to quickly
               understand requirements, create innovative
               solutions and complete projects within tight
               deadlines. </p>

         </div>
    
         </div>
        
    </div>
  )
}

export default Home