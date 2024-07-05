
import React, { useContext } from 'react'
import "./Loader.scss"
import MyContext from '../../Context/MyContext'

const Loader = () => {
    const {loadingin} = useContext(MyContext)

  return (
    <>
    {
loadingin &&
    <div class="container-boxx">
    <div class="box">
        <div class="front-box"></div>
        <div class="back-box"></div>
        <div class="left-box"></div>
        <div class="right-box"></div>
        <div class="top-box"></div>
        <div class="bottom-box"></div>
    </div>
</div>

    }
    </>
  )
}

export default Loader