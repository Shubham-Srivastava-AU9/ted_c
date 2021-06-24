import React, {createContext, useState, useEffect} from 'react'
import ProductsAPI from './api/ProductApi'
import CategoriesAPI from './api/CategoryApi'


export const GlobalState = createContext()


export const DataProvider = ({children}) =>{
    
    const state = {
        productsAPI: ProductsAPI(),
        categoriesAPI: CategoriesAPI()
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}