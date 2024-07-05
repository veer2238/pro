import React from 'react'
import './Websites.scss'
import {  LinkedIn } from '@mui/icons-material';
const Websites = () => {

    
    
    
      const shareToLinkedIn = () => {
        const url = `https://www.linkedin.com/in/nandani-patel-a5017b20a/url=${encodeURIComponent(window.location.href)}`;
        window.open(url, '_blank');
      }
    
   
    
    
  return (
    <div className="shareme">
                  
                  <span onClick={shareToLinkedIn}><LinkedIn/></span>

                
                </div>
  )
}

export default Websites