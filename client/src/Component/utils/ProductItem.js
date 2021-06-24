import React from 'react'
import BtnRender from './BtnRender'
import "./productItem.css"

function ProductItem({product,deleteProduct}) {

    return (
        <div className="product_card">
        
                
            
            

            <div className="product_box">
                <h4 title={product.title}>title :{product.title}</h4>
                <h4>Price :{product.price}</h4>
                {product.category.map((item)=>{
                    return <h4>Category :{item}</h4>
                })}
            </div>

            
            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
    )
}

export default ProductItem
