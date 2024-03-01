import React from 'react'

export default function Contact() {
  return <>
  <div className="contact text-center">
    <h2 className='fs-1 fw-bolder '> CONTACT </h2>
    <div className="icon-star1">
<i className="fa-regular fa-star mx-auto fa-2x text-black "></i>
</div>
<div className="container my-4">
  <input type="text" placeholder='Username' className='form-control w-75 mt-4 mx-auto' />
  <input type="text" placeholder='UserAge' className='form-control w-75 mt-4 mx-auto' />
  <input type="text" placeholder='UserEmail' className='form-control w-75 mt-4 mx-auto' />
  <input type="text" placeholder='UserPassword' className='form-control w-75 mt-4 mx-auto' />
  <button className='btn btn-info mt-4 '>Send Message</button>
</div>
  </div>
  
  </>
}
