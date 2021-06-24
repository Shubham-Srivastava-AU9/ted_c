import {useState, useEffect} from 'react'
import axios from 'axios'


function ProductsAPI() {
    const [products, setProducts] = useState([])
    const [callback, setCallback] = useState(false)
    const [category, setCategory] = useState('')
    const [result, setResult] = useState(0)

    useEffect(() =>{
        const getProducts = async () => {
            const res = await axios.get("/api/products")
            setProducts(res.data.products)
            setResult(res.data.result)
        }
        getProducts()
    },[callback, category])
    
    return {
        products: [products, setProducts],
        callback: [callback, setCallback],
        category: [category, setCategory],
        result: [result, setResult]
    }
}

export default ProductsAPI
