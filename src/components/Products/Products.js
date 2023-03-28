import React, { useEffect, useState } from 'react'
import "./Products.scss"
import axios from "axios"
import Product from '../Product/Product'

function Products() {
    const [getData, setData] = useState([])

    useEffect(() => {
        const getApi = () => {
            axios.get("https://fakestoreapi.com/products")
                .then(res => setData(res.data))
                .catch(err => console.log(err))
        }
        getApi()
    }, [])


    return (
        <div className='products'>
            {
                getData.map(product => (
                    <Product product={product} key={product.id} />
                ))
            }

        </div>
    )
}

export default Products