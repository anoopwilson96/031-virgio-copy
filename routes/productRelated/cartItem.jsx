import React from 'react'

function CartItem() {
  return (
    <>
      <div className='container mx-auto flex flex-row justify-around text-wrap border-b-2 px-5 py-3 border-red-500'>
        <div className='flex flex-row items-center gap-10'>
        <img className=' max-w-auto  max-h-24' src="https://cdn.shopify.com/s/files/1/0785/1674/8585/files/21MayVirgio-02151.jpg?v=1716802719&width=552&crop=center" alt="" />
        <h3 className=' font-semibold'>The product name</h3>
        <span>$ 2500</span>

        </div>

        <div className=' gap-5 flex flex-row align-middle justify-center items-center'>
          <button className='px-3 py-1  rounded-md bg-red-400 text-white  hover:bg-red-600'> + </button>
          <h3>1</h3>
          <button className='px-3 py-1  rounded-md bg-red-400 text-white  hover:bg-red-600' > - </button>
        </div>
      </div>
    </>
  )
}

export default CartItem