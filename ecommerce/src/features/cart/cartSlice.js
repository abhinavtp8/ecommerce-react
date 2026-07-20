

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}



const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const isItem = state.products.find(
                item => item.product.id === action.payload.id
            );

            if (isItem) {
                isItem.quantity++;
            } else {
                state.products.push({
                    id: Date.now(),
                    product: action.payload,
                    quantity: 1,
                });
            }
        },

        increaseQuantity: (state, action) => {
            console.log(action.payload);

            state.products = state.products.map((item) => {
                if (item.id === action.payload) {
                    item.quantity += 1
                }

                return item
            })

        },
        decreaseQuantity: (state, action) => {
            console.log(action.payload);

            state.products = state.products.map((item) => {
                if (item.id === action.payload) {
                    item.quantity--
                }

                return item
            })
        },
        deleteItem: (state, action) => {
            state.products = state.products.filter(
                item => item.id !== action.payload
            );
        }
    }
})




export const { addToCart, increaseQuantity, decreaseQuantity, deleteItem } = cartSlice.actions
export default cartSlice.reducer