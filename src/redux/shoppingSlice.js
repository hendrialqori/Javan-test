import { createSlice } from "@reduxjs/toolkit";
import { Products } from '../utils/Products'

const initialState = {
    shoppingCart: Products,
    isShowModal: false,
    isProductBeforeDelete: {}
}

export const shoppingSlice = createSlice({
    name: 'shopping',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            return {
                ...state,
                shoppingCart: state.shoppingCart.map((Product)=> {
                    return action.payload.id === Product.id ? { ...Product, count: Product.count + 1} : Product
                })
            }
        },
        lessTodCard: (state, action) => {
            return {
                ...state,
                shoppingCart: state.shoppingCart.map((Product)=> {
                    return action.payload.id === Product.id ? { ...Product, count: Product.count - 1} : Product
                })
            }
        },
        deleteProductFromCart: (state, action) => {
            return {
                ...state,
                shoppingCart: state.shoppingCart.filter(Products => Products.id !== action.payload?.id),
                isShowModal: false
            }
        },
        openModalDelete: (state, action) => {
            return {
                ...state,
                isShowModal: !state.isShowModal,
                isProductBeforeDelete: action.payload
            }
        },
        closeModalDelete: (state, _) => {
            return {
                ...state,
                isShowModal: false
            }
        }
    }
})

export const { addToCart, lessTodCard, deleteProductFromCart, openModalDelete, closeModalDelete } = shoppingSlice.actions;
export default shoppingSlice.reducer