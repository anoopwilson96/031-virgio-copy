import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';

export async function loader(){
  try {
    const response = await fetch('http://localhost:3000/categories');
    const categories = await response.json()
    return{categories}
    
  } catch (error) {
    console.log('Error in fetching')
  }

}
function Categories() {
  const { categories } = useLoaderData();

  return (
    <>
      <main className='container'>
        <h1 className="text-3xl flex flex-row justify-center items-center p-4 ">
          Shop our Categories
        </h1>

        {categories && categories.length > 0 ? ( // Check if categories is not undefined and has items
          <div>
            <ul className="  lg:mx-80 grid gap-5 sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-2 md:grid-rows-2  ">
              {categories.map((category) => (
                <li className='flex flex-row justify-center items-center' key={category._id}>
                  {/* <h1>{category.categoryName}</h1> */}
                  <Link to={`/categories/${category._id}`}>
                    <img className="w-32 sm:w-48 md:w-64 lg:w-80 h-32 sm:h-48 md:h-64 lg:h-80 " src={category.image} alt="" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading categories...</p>
        )}
      </main>
    </>
  );
}


export default Categories