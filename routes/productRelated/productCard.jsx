import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
  return (
    <>    
    <article className="productList flex flex-col">
    <Link to={`/products/${props.product._id}`}>
    <img
      src={props.product.mainImage}
      alt=""
    />
    </Link>

    <div className="productDetails">
    <Link to={`/products/${props.product._id}`}>
    <h3 className="h6">{props.product.brand}</h3>
    </Link>

      <div>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>☆ </span>
      </div>
      <div className="priceAndButton flex flex-row gap-5">
        <span className="p">${props.product.price}</span>
        <button className="border px-2 rounded bg-gray-800 text-white button buttonPrimary">Add to cart</button>
      </div>
    </div>
  </article>
  </>
  )
}

export default ProductCard