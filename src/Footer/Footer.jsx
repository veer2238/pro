import React, { useContext } from 'react'
import './Footer.scss'
import MyContext from '../Context/MyContext'
import { DocumentScanner } from '@mui/icons-material';
import { Modal } from 'react-responsive-modal';
import pdf from '../Image/Patel Nandani.pdf'
import Websites from '../Websites/Websites';

const Footer = () => {

    const{open,onCloseModal,onOpenModal} =useContext(MyContext)
  return (
    <div className="portfolio-footer">
           
            <button onClick={onOpenModal}><span><DocumentScanner/></span>My Resume</button>
            <Modal open={open} onClose={onCloseModal} center>
         <iframe src={pdf} height={400} width={500} title='pdf'/>
        </Modal>
       <Websites/>
         </div>
  )
}

export default Footer