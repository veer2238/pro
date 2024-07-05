import React, { useContext } from 'react'
import './Header.scss'
import MyContext from '../Context/MyContext'

const Header = () => {

    const{Navigate} =useContext(MyContext)
  return (
    <div className="portfolio-header">
    <li onClick={() => (Navigate('/'))}>Home</li>
    <li onClick={() => (Navigate('/project'))}>Projects</li>
    <li onClick={() => (Navigate('/aboutme'))}>About Me</li>
    <li onClick={() => (Navigate('/contact'))}>Contact</li>
 </div>
  )
}

export default Header