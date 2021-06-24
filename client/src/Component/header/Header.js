import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'



const Header = () => {
    return (
     <div className = "nav-bar">
       <Link to ='/'><h1>Product</h1></Link>
        <ul className='demo'>
            <li><Link to = '/create_product' style={{textDecoration:'none',color:'purple'}}>Create_Product</Link></li>
            <li><Link to = '/category' style={{textDecoration:'none',color:'purple'}}>Category</Link></li>
          </ul>
     </div>
    )
}
export default Header;
