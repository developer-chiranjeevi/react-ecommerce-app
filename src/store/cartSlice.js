import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        items:[],
        totalPrice:0,
    },
    reducers:{
        addItem(state,action){
            state.items.push(action.payload);
            state.totalPrice = state.totalPrice+action.payload.price;
        },
        removeItem(state,action){
            console.log(action.payload)
            state.items = state.items.filter((item) => item.id !== action.payload.id);
            state.totalPrice = state.totalPrice-action.payload.price;
        }
    }
})

export default cartSlice;