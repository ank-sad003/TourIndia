import React from 'react'
import './Testimonials.css';

import per01 from '../../file/image/person1.avif'
import per02 from '../../file/image/person2.avif'
import per03 from '../../file/image/person3.avif'
import per04 from '../../file/image/person4.avif'
import per05 from '../../file/image/person5.avif'
import per06 from '../../file/image/person6.avif'

const Testimonials = () => {
   

   return <>
         <div className="per01">
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
            placeat suscipt earum debitits recusandae voluptate illum expedita 
            corrupti aliquid doloribus delectus?
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per01} className='img1' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Aditya Roy</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per02">
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
            placeat suscipt earum debitits recusandae voluptate illum expedita 
            corrupti aliquid doloribus delectus?
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per02} className='img2' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Prianka Pandey</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per03">
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
            placeat suscipt earum debitits recusandae voluptate illum expedita 
            corrupti aliquid doloribus delectus?
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per03} className='img3' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Swapna Joshi</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per04">
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
            placeat suscipt earum debitits recusandae voluptate illum expedita 
            corrupti aliquid doloribus delectus?
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per04} className='img4' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Niloy Raj</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per05">
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
            placeat suscipt earum debitits recusandae voluptate illum expedita 
            corrupti aliquid doloribus delectus?
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per05} className='img5' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Sujata Pan</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per06">
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
            placeat suscipt earum debitits recusandae voluptate illum expedita 
            corrupti aliquid doloribus delectus?
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per06} className='img6' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Jesica Rao</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>
   </>
}

export default Testimonials