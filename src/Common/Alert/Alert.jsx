
import React, { useContext, useEffect } from 'react'
import "./Alert.scss"
import { CiHardDrive } from 'react-icons/ci'
import MyContext from '../../Context/MyContext'
import { GrAlert } from 'react-icons/gr'
const Alert = () => {

    const {message ,openalert,setOpenalert} = useContext(MyContext)

    useEffect(() =>{
      if(openalert){
setTimeout(() => {
  setOpenalert(false)
}, 3000);
      }
    })
  return (

    <>
    {openalert &&  <div class="alert" style={{backgroundColor:message.includes('Thanks')?'green':'red'}}>
   {message.includes('Thanks')? <CiHardDrive/>:<GrAlert/>}
      {message}
    
    </div>}
    </>
 
  )
}

export default Alert