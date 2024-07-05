import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import MyContextProvider from './Context/MyContextProvider'
import Project from './Project/Project'
import AboutMe from './AboutMe/AboutMe'
import MyResume from './MyResume/MyResume'
import Contact from './Contact/Contact'
import NoPage from './Nopage/NoPage'
import PDF from './Resumepdf/PDF'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Websites from './Websites/Websites'
import Alert from './Common/Alert/Alert'
import Loader from './Common/Loader/Loader'
const App = () => {
  return (
 <div>
      <BrowserRouter>
      <MyContextProvider>
      <Alert/>
      <Loader/>
        <Header/>
             <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/pdf' element={<PDF/>}/>
                <Route path='/websites' element={<Websites/>}/>
                <Route path='/project' element={<Project/>}/>
                <Route path='/aboutme' element={<AboutMe/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/myresume' element={<MyResume/>}/>
                <Route path='*' element={<NoPage/>}/>
            </Routes>
            <Footer/>
            </MyContextProvider>
       </BrowserRouter>
       
 </div>
  )
}

export default App