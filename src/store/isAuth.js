import {createSlice} from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"authSlice",
    initialState:{
        isLoggedIn:false,
        userId:null
    },
    reducers:{
        login(state,action){
            state.isLoggedIn = true;
            state.userId = action.payload;
        },
        logout(state){
            state.isLoggedIn = false;
        }
    }
});

export default authSlice;