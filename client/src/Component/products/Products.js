import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import ProductItem from '../utils/ProductItem'
import axios from 'axios'



function Products() {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [callback, setCallback] = state.productsAPI.callback
   

  

    const deleteProduct = async(id) => {
        try {
           
            const deleteProduct = axios.delete(`/api/products/${id}`, {
            })

            await deleteProduct
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

 

   

    return (
        <>
        <div className="products">
            {
                products.map(product => {
                    return <ProductItem key={product._id} product={product}
                     deleteProduct={deleteProduct}  />
                })
            } 
        </div>
        </>
    )
}

export default Products
