import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState = {
    products: products,
    selectedProduct: null,
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            const productId = action.payload;
            state.selectedProduct = state.products.find(p => p.id === productId)
        },
        filterItems: (state, action) => {
            const {flavour, type} = action.payload
            const filteredProducts = []

            if (flavour != 'All' && type == 'All') {
                state.products = products
                
                for (let i = 0; i < products.length; i++) {
                    if (products[i].flavour == flavour)
                        filteredProducts.push(products[i])
                }
                state.products = filteredProducts
            }  
            else if (flavour == 'All' && type != 'All') {
                state.products = products
                
                for (let i = 0; i < products.length; i++) {
                    if (products[i].type == type)
                        filteredProducts.push(products[i])
                }
                state.products = filteredProducts
            }  
            else {
                state.products = products
            }      
        }
    }
})