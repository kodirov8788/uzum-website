import React from 'react'
import { useLocation } from "react-router-dom"
import "./Single.scss"
function Single() {

    const product = useLocation().state
    // console.log(product)
    return (
        <div className='single'>
            <img src={product.image} alt="" />
            <h1>{product.title}</h1>
        </div>
    )
}

export default Single