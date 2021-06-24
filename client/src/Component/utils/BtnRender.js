import React, {useContext} from 'react'
import {Link} from 'react-router-dom'

function BtnRender({product, deleteProduct}) {
  

    
    return (
        <div className="row_btn">
            
                
                <>
                    <Link id="btn_buy" to="#!" 
                    onClick={() =>deleteProduct(product._id)}>
                        Delete
                    </Link>
                    <Link id="btn_view" to={`/edit_product/${product._id}`}>
                        Edit
                    </Link>
                </>
                
            
                
        </div>
    )
}

export default BtnRender
