import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import {useHistory, useParams} from 'react-router-dom'
import './Create_product.css'
import CategoriesAPI from '../../../api/CategoryApi'

const initialState = {
    product_id: '',
    title: '',
    price: 0,
    category: '',
    _id: ''
}

function CreateProduct() {
    const state = useContext(GlobalState)
    const [product, setProduct] = useState(initialState)
    const [categories] = state.categoriesAPI.categories
    



    const history = useHistory()
    const param = useParams()

    const [products] = state.productsAPI.products
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.productsAPI.callback

    useEffect(() => {
        if(param.id){
            setOnEdit(true)
            products.forEach(product => {
                if(product._id === param.id) {
                    setProduct(product)
                }
            })
        }else{
            setOnEdit(false)
            setProduct(initialState)
        }
    }, [param.id, products])

    

    

    const handleChangeInput = e =>{
        const {name, value} = e.target
        setProduct({...product, [name]:value})
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
           

            if(onEdit){
                await axios.put(`/api/products/${product._id}`, {...product})
            }else{
                await axios.post('/api/products', {...product})
            }
            setCallback(!callback)
            history.push("/")
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    
    return (
        <div className="create_product">
           

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="product_id">Product ID</label>
                    <input type="text" name="product_id" id="product_id" required
                    value={product.product_id} onChange={handleChangeInput} disabled={onEdit} />
                </div>

                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" required
                    value={product.title} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" required
                    value={product.price} onChange={handleChangeInput} />
                </div>

               


                <div className="row">
                    <label htmlFor="price">Category</label>
                    
                    <input type="text" name="category" id={categories._id} required
                    
                    value={product.category} onChange={handleChangeInput}
                    
                     />
                      
                </div>

                {/* <div className="row">
                    <label htmlFor="categories">Categories: </label>
                    <select name="category" value={product.category} onChange={handleChangeInput} >
                        <option value="">Please select a category</option>
                        {
                            categories.map(category => (
                                <option value={category._id} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div> */}

                <button type="submit">{onEdit? "Update" : "Create"}</button>
            </form>
        </div>
    )
}

export default CreateProduct
