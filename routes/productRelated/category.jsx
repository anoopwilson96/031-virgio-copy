import React from 'react'
import ProductCard from '../components/productCard'
import { useLoaderData } from 'react-router-dom';



export async function loader({params}) {
  //code for fetching category name as heading
  const response = await fetch(`http://localhost:3000/categories/${params.categoryId}`)
  const category = await response.json()
  

  //code for fetching product list
  const productResponse = await fetch(`http://localhost:3000/products?category=${params.categoryId}`)
  const products = await productResponse.json()
  
  return {category,products};
}





function Category() {
  const {category,products} = useLoaderData()
  console.log(products)
  return (
  <>
    <main>

    <h1 className="text-3xl flex flex-row justify-center items-center p-4 ">

          Shop our {category.categoryName}
    </h1>
    <section className='  container max-w-5xl mx-auto grid gap-5 p-5 sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-3 md:grid-rows-3 '>
      {
        products.map(product=>{
          return(
            <ProductCard key={product._id} product={product}  />

          )
        })
      }
      




    </section> 







    </main>
  </>
  )
}

export default Category