import React from 'react'
import ProductCard from '../components/productCard'

function Category() {
  return (
  <>
    <main>

    <h1 className="text-3xl flex flex-row justify-center items-center p-4 ">
          Shop our CATEGORY NAME
    </h1>
    <section className='  container max-w-5xl mx-auto grid gap-5 p-5 sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-3 md:grid-rows-3 '>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>




    </section> 







    </main>
  </>
  )
}

export default Category