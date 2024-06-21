import React from 'react'
import CartItem from './cartItem'
import { useSelector } from 'react-redux'

function Cart(props) {
  const items = useSelector(state=> state.cart.items)
  return (
    <>
    <main className=' container mx-auto' >
      <div className='flex justify-center border-b-2 px-5 py-3 border-red-500'>
        <h1 className='text-2xl  font-bold'> Your Cart</h1>
      </div>
      {
        items.map(item=>{
          return <CartItem key={item._id} />
        })
      }


<div className=' container mx-auto '>
<h2 className='mt-10 font-bold flex flex-row justify-start'>Price summary</h2>
<section >

      <div className='flex flex-row  justify-between'>
        <h3>Total price</h3>
        <span>2500</span>
      </div>
      <div className='flex flex-row  justify-between' >
        <h3>Price incl. tax </h3>
        <span>3000</span>
      </div>
      <div className=' font-semibold flex flex-row  justify-between' >
        <h3>Price incl. tax </h3>
        <span>3000</span>
      </div>

    <button className='bg-red-400 rounded-none w-full mt-3 text-white hover:bg-red-600' ><h2>Checkout </h2></button>
    </section>

</div>



    </main>
    
    
    
    
    
    </>
  )
}

export default Cart