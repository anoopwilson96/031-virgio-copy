import React from 'react'
import { Outlet }from 'react-router-dom'
import {Link} from 'react-router-dom'


function Root() {
  return (
    <>
    <header className=''>
      <div >
        <Link to={`/`} className='flex  justify-center flex-wrap gap-1 items-center mt-3 ' >
        <img className='cartIcon ' src="./media/myfavicon.png.svg"  alt="" />
        <h2 className='text-3xl font-bold'>
          DressCart 
        </h2>
        </Link>
      </div>
      <div>
      <div>
          <ul className=' mt-10 flex flex-row  justify-between max-w-2xl    mx-auto p-2 '>
            <li className='border py-1 px-4 rounded-lg  border-red-500 text-red-600'>
              <Link to={'/'} > Home </Link>
            </li>
            
             <li className='border py-1 px-4 rounded-lg  border-red-500 text-red-600'>
              <Link to={'/categories'}>Categories</Link>
            </li>

            <li className='border py-1 px-4 rounded-lg  border-red-500 text-red-600'>Login</li>
            <li className='border py-1 px-4 rounded-lg  border-red-500 text-red-600'>Logout</li>

            <li>
            <Link to={'/cart'}>
            <span  className=" border py-1 px- rounded-lg  border-red-500 text-red-600 material-symbols-outlined">local_mall</span>
            </Link>
            </li>

          </ul>
        </div>

      </div>
    </header>

<Outlet/>
    
    <footer className=''>

      <div>
        <div className=' flex flex-col justify-items-center items-center'>

          <h3 className='mb-1 mt-8'>Register our news letter</h3>

          <div className=' flex flex-row gap-5' >
          <input className='bg-red-100 rounded border-2 px-1' type="email" placeholder='Enter your Email' />
          <button className='bg-red-400 rounded border-2 px-1' type="submit">Submit</button>
          </div>
        </div>
        <div>
          <ul className='mt-8 flex flex-row justify-evenly max-w-2xl my-2 mx-auto'>
            <li className='border-b-4  border-red-200  hover:border-red-500 '> Contact Us</li>
            <li className='border-b-4  border-red-200  hover:border-red-500 '>About Us</li>
            <li className='border-b-4  border-red-200  hover:border-red-500 '>Careers</li>
            <li className='border-b-4  border-red-200  hover:border-red-500 '>Location</li>
          </ul>
        </div>
      </div>

    </footer>

    </>

  )
}

export default Root
