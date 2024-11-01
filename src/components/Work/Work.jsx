import React from 'react'
import './Work.scss'
import { FaStarOfLife } from "react-icons/fa";
const Work = () => {
  return (
  <>
  <div className="main__title">

  <h1>Let's work together. <br />
  <span>Get in touch.</span></h1>
  </div>
 
<div className="Wrapper_work">

<div className="end">
 <FaStarOfLife />
 <p>© Oli Harris 2023</p>
 
 </div>

 <div className="mail">
 <a href="">Twitter</a>
 <a href="">
 Linkedin</a>
 <a href="">Mail</a>
 </div>



</div>

  </>
  )
}

export default Work