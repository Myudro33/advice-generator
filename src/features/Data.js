import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data :[],
    error:""
}
export const fetchAdvice = createAsyncThunk('advice/fetchAdvice',()=>{
    return axios
    .get('https://api.adviceslip.com/advice').then((response)=>response)
})



const getData = createSlice({
    name:'advice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchAdvice.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchAdvice.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
            state.error=''
        })
        builder.addCase(fetchAdvice.rejected,(state,action)=>{
            state.loading = false
            state.data = []
            state.error  = action.error.message
        })
    }
})

export default getData.reducer