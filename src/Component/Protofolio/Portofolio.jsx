import React, { useState } from 'react'

export default function Portofolio() {
  const [data , setData] = useState([
    {img : '../../images/poert1.png' , id : "img1"},
    {img : '../../images/poert2.png' , id : "img2"},
    {img : '../../images/poert3.png' , id : "img3"},
    {img : '../../images/poert1.png' , id : "img4"},
    {img : '../../images/poert2.png' , id : "img5"},
    {img : '../../images/poert3.png' , id : "img6"},
  ])
 console.log(data);
 
  return <>
  <section className=' text-center py-4 bg-white vh-100'>
<h2 className="fs-2 fw-bolder text mb-2">PORTOFOLIO COMPONENT</h2>
<div className="icon-star1">
<i className="fa-regular fa-star mx-auto fa-2x text-black"></i>
</div>
<div className="container">
  <div className="row g-4">
   {data.map( (item, index)=>( <>
    <div key={index} className=" col-md-4" >
      <img src={require('../../images/poert1.png')} alt=""  className='w-100 rounded-3' />
    </div>
   </>))}
  </div>
</div>
  </section>
  </>
}

