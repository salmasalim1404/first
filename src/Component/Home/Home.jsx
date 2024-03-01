import React from 'react'
import myImage from '../../images/avataaars.svg'

export default function Home() {
  return <>
  <header className='vh-100 d-flex justify-content-center align-items-center text-center'>
<div>
<img src={myImage} className='w-50' alt=""/>
<h1 className='text-center fw-bolder my-3'>START FRAMEWORK</h1>
<div className="icon-star">
<i className="fa-regular fa-star mx-auto fa-2x"></i>
</div>
<p className='text-center fw-bold my-3'>Graphic Artist - Web Designer - Illustrator</p>
</div>

  </header>
  
  </>
}
