import React from 'react'
import './Project.scss'
import img from '../Image/download.jpg'


const Project = () => {

 
  return (
    <div className='project'>
   
    <div className="project-right">

    
   
   <div className="project-detail">

<h2>Personal Projects</h2>
<span>
In addition to my professional work, I enjoy working on personal projects that challenge me to learn and grow. <br />
 Some of my notable projects include:</span> <br />

       <div className="project-grid">
    
            <div className="project-grid-img">
            <a href="https://nanu2705.github.io/portfolio1/" target="_blank" rel="noopener noreferrer">  <img src={img} alt=''/> <span>portfolio1</span>   </a>
            <a href="https://nanu2705.github.io/portfolio2/" target="_blank" rel="noopener noreferrer">  <img src={img} alt=''/> <span>portfolio2</span>  </a>
            <a href=" https://nanu2705.github.io/portfolio3/" target="_blank" rel="noopener noreferrer">   <img src={img} alt=''/> <span>portfolio3</span>  </a>
            <a href="https://nanu2705.github.io/form-validation/form%20validation.html" target="_blank" rel="noopener noreferrer">  <img src={img} alt=''/> <span>Form-Validation</span>  </a>
            <a href="https://nanu2705.github.io/responsive-site/addeventlistener.html" target="_blank" rel="noopener noreferrer">  <img src={img} alt=''/> <span>Responsive site</span>  </a>
            <a href="https://nanu2705.github.io/slider-in-header/header.html" target="_blank" rel="noopener noreferrer">  <img src={img} alt=''/> <span>Slider</span>  </a>
            <a href="https://nanu2705.github.io/password-generator-/Untitled-1.html" target="_blank" rel="noopener noreferrer">  <img src={img} alt=''/> <span>Password Generator</span>  </a>
            <a href="https://nanu2705.github.io/gridlayout/grid%20layouts.html" target="_blank" rel="noopener noreferrer">  <img src={img} alt=''/> <span>Grid-Layout</span>  </a>
            <a href="https://nanu2705.github.io/overlay-card/overlay%20card.html" target="_blank" rel="noopener noreferrer">  <img src={img} alt=''/> <span>Overlay Card</span>  </a>
            <a href="https://nanu2705.github.io/circle-animation/animation.html" target="_blank" rel="noopener noreferrer">  <img src={img} alt=''/> <span>Animation Effect</span>  </a>
            <a href="https://nanu2705.github.io/login-form/form1.html" target="_blank" rel="noopener noreferrer">  <img src={img} alt=''/> <span>Login form</span>  </a>
            <a href="https://nanu2705.github.io/header2/Header2.html" target="_blank" rel="noopener noreferrer">  <img src={img} alt=''/> <span>Header</span>  </a>
            <a href="https://nanu2705.github.io/index/form.html" target="_blank" rel="noopener noreferrer">  <img src={img} alt=''/> <span>Form page</span>  </a>
            <a href="https://nanu2705.github.io/css/form.html" target="_blank" rel="noopener noreferrer">  <img src={img} alt=''/> <span>Form page using css</span>  </a>
            
            </div>
       </div>
   </div>
    <div className="project-footer">
    
    </div>
    </div>
   
</div>
  )
}

export default Project