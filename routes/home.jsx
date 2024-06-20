import React from 'react'
import { Link,useLoaderData } from 'react-router-dom';
import Categories from './productRelated/categories';


export async function loader() {
  try {
    const response = await fetch('http://localhost:3000/categories');
    const categories= await response.json()
    return { categories };
    
  } catch (error) {
    console.log("Error in fetching") 
  }
} 

function Home() {
  const {categories}  = useLoaderData()
  // console.log (categories)
  
  return (
    <main>
      <div className='mainOne'>

        <div className='homeAdd'>
          <div className=''>
          <h2 className='font-bold  m-auto flex flex-row justify-center'>Sale alert! Shop before they're gone!</h2>
          <h3 className='font-semibold m-auto flex flex-row justify-center'>Elevate your wardrobe with our summer sale. Shop luxurious dresses at incredible price</h3>
          </div>

        </div>

      </div>

      <div className="mainTwo flex flex-col  justify-items-center mt-5 items-center">
        <h1> Shop By Category</h1>

        <div className='mt-5 grid grid-cols-2 grid-rows-2 gap-6'>
          { categories.map(category=>{
            return(
              <Link  key={category._id} to={`/categories/${category._id}`}> 
              <button  className=' border py-1 px-4 rounded-lg  border-red-500 text-red-600 hover:bg-red-300'  >
              {category.categoryName}
              </button>
              </Link>
)
          })
          }
        </div>
      </div>
      <Categories/>
    </main>
  )
}

export default Home