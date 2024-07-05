import React, { useState } from 'react'
import MyContext from './MyContext'
import { useNavigate } from 'react-router-dom'
const MyContextProvider = ({children}) => {

    const Navigate =useNavigate()

    //pdf 
  
    const [open,setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    //pdf over

//contact
    //loader

    const[loadingin,setLoadingin] =useState(false)

//loader over

//alert
const [openalert,setOpenalert] = useState(false)
//alert over

const [message,setMessage] = useState('')
//contact over
  return (
    <div>
        
        <MyContext.Provider value={{Navigate,open,setOpen, onOpenModal,onCloseModal,loadingin,setLoadingin,openalert,setOpenalert,
        message,setMessage


        }}>

            {children}
        </MyContext.Provider>
    </div>
  )
}

export default MyContextProvider