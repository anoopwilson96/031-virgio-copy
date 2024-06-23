


import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLoaderData } from 'react-router-dom';
import { addItemToCart } from '../../src/features/cart/cartSlice';



export async function loader({params}) {

  //code for fetching 20 product list
  const productResponse = await fetch(`http://localhost:3000/products`)
  const products = await productResponse.json()
  
  return {products};
}




function ProductsAll() {
  const { products } = useLoaderData();
  const dispatch = useDispatch

  return (
    <main>
      <h1 className="text-3xl flex flex-row justify-center items-center p-4">
        Recommended products
      </h1>
      {products ? (
        <section className="container max-w-5xl mx-auto grid gap-5 p-5 sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-3 md:grid-rows-3">
          {products.map((product) => (
        <article key={product._id} className="productList flex flex-col">
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
            <button onClick={()=> {dispatch(addItemToCart(product))}}  className="border px-2 rounded bg-gray-800 text-white button buttonPrimary">Add to cart</button>
          </div>
        </div>
      </article>
          ))}
        </section>
      ) : (
        <p>Loading products...</p>
      )}
    </main>
  );
}

export default ProductsAll;
