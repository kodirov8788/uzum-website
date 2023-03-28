import React from 'react'
import "./Product.scss"
import { Link } from "react-router-dom"
function Product({ product }) {
    return (
        <Link to={`product/${product.id}`} state={product}>
            <div className='card'>
                <img src={product.image} alt="" />
                <div className="card_price">
                    <h3>{product.title}</h3>
                    <h3>{product.price}</h3>
                </div>
            </div>
        </Link>

    )
}

export default Product