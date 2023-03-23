import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            //if item already exist in the cart array then we simply return the array without adding item

            if (existingItem) {
                return state
            }
            
            
            //if item doesn't exist already then add it
            return [...state,
            {
                id: action.payload.id,
                name: action.payload.name,
                price: Number(action.payload.price.replace(',', '')),
                img: action.payload.img,
                qty: action.payload.qty
            }
            ]
        },
        removeItem: (state, action) => {
           // console.log(action)
            return state.filter((item) => item.id !== action.payload)
        },
        increaseQty: (state, action) => {
            state.map((item) => {
                if (item.id === action.payload)
                    return [...state, { qty: item.qty++ }];
                else {
                    return state;
                }
            })
        },
        decreaseQty: (state, action) => {
            state.map((item) => {
                if (item.id === action.payload)
                    return [...state, { qty: item.qty-- }];
                else {
                    return state;
                }
            })
        },
        deleteAll:(state)=>{
                    return [];
        }
    }
})

export const { addItem, removeItem, increaseQty, decreaseQty,deleteAll } = cartReducer.actions

export default cartReducer.reducer
