import React from 'react'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
        <header>
      <div className='flex  justify-center flex-wrap gap-10 items-center'>
        <h2 className='text-3xl'>
          DressCart 
        </h2>
        <img className='cartIcon' src="/media/cart.svg"  alt="" />
      </div>
    </header>

<Outlet/>
    
    <footer>

      <div>
        <div className=' flex flex-col justify-items-center items-center'>

          <h3 className='mb-1'>Register our news letter</h3>

          <div className=' flex flex-row gap-5' >
          <input className='bg-red-100 rounded border-2 px-1' type="email" placeholder='Enter your Email' />
          <button className='bg-red-400 rounded border-2 px-1' type="submit">Submit</button>
          </div>
        </div>
        <div>
          <ul className='flex flex-row justify-between my-2 mx-5'>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Location</li>
          </ul>
        </div>
      </div>

    </footer>

    </>

  )
}

export default Root
