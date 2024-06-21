import React from 'react'
import { Link,useLoaderData } from 'react-router-dom';



export async function loader() {
  try {
    const response = await fetch('http://localhost:3000/categories');
    const categories= await response.json()


  //code for fetching 20 product list
  const productResponse = await fetch(`http://localhost:3000/products`)
  const products = await productResponse.json()
    return { categories,products };
    
  } catch (error) {
    console.log("Error in fetching") 
  }
} 

function Home() {
  const {categories,products}  = useLoaderData()
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

      <div className="mainTwo flex flex-col  justify-items-center mt-5 items-center border-t-2 border-b-2 p-5 border-red-500">
        <h1 className='text-2xl font-semibold  '> Shop By Category</h1>

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

      <div>
        <h1 className='flex flex-row text-2xl justify-center font-semibold mt-3' >Our popular products</h1>
        <div>
          
      {products ? (
        <section className="container max-w-5xl mx-auto grid gap-5 p-5 sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-3 md:grid-rows-3">
          {products.map((product) => (
        <article key={product._id} className="productList flex flex-col border-b-2 p-5 border-red-500">
        <Link to={`/products/${product._id}`}>
        <img
          src={product.mainImage}
          alt=""
        />
        </Link>
    
        <div className="productDetails">
        <Link to={`/products/${product._id}`}>
        <h3 className="h6">{product.brand}</h3>
        </Link>
    
          <div>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆ </span>
          </div>
          <div className="priceAndButton flex flex-row gap-5">
            <span className="p">${product.price}</span>
            <button className="border px-2 rounded bg-gray-800 text-white button buttonPrimary">Add to cart</button>
          </div>
        </div>
      </article>
          ))}
        </section>
      ) : (
        <p>Loading products...</p>
      )}
        </div>

      </div>









    </main>
  )
}

export default Home


