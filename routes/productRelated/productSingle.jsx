import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLoaderData,} from 'react-router-dom'
import { addItemToCart } from '../../src/features/cart/cartSlice';



export async function loader({params}) {
  //code for fetching product details
  const response = await fetch(`http://localhost:3000/products/${params.productId}`)
  const product = await response.json()

  return {product};
}

function ProductSingle() {
  const {product} = useLoaderData()
  const dispatch = useDispatch()
  return (

<>    
    <article className="  container max-w-2xl mx-auto productList flex flex-col">




    <div className="productDetails mt-10 flex flex-col items-start mx-auto gap-2">
    <img className='max-h-fit max-w-80   '
      src={product.mainImage}
       alt=""
    />

    <h3 className="h6">{product.brand}</h3>
    <p>{product.description}</p>


      <div>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>☆ </span>
      </div>
      <div className="priceAndButton flex flex-row gap-5">
        <span className="p">$ {product.price}</span>
        < button onClick={()=> {dispatch(addItemToCart(product))}} className="border px-2 rounded bg-gray-800 text-white button buttonPrimary"  > Add to cart</button>
      </div>
    </div>
  </article>
  </>

   
  )
}

export default ProductSingle


