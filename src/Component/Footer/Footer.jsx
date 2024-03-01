import React from 'react'

export default function Footer() {
  return <>
 <footer className=' position-relative bottom-0 pt-5'>
 <div className="container text-white pb-5">
    <div className="row">
      <div className="col-md-4 mb-5">
        <div className="div1 text-center">
          <h2>OUR LOCATION</h2>
          <p>2215 John Daniel Drive</p>
         <p> Clark, MO 65243</p>
        </div>
      </div>
      <div className="col-md-4 mb-5 ">
        <div className="div2 text-center">
          <h2>AROUND THE WEB</h2>
         <div className="icons fs-5 ">
         <i className='fa-solid me-3 fa-brands fa-facebook'></i>
          <i className='fa-solid me-3 fa-brands fa-instagram'></i>
          <i className='fa-solid me-3 fa-brands fa-linkedin'></i>
          <i className='fa-solid me-3 fa-brands fa-twitter'></i>
         </div>
        </div>
      </div>
      <div className="col-md-4 mb-3 ">
        <div className="div3 text-center">
          <h2>ABOUT FREELANCER</h2>
          <p className=''>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
    </div>
  </div>
  <div className="copy  py-3 text-center text-white" >
  Copyright © Your Website 2021
  </div>
 </footer>

  
  
  </>
}
