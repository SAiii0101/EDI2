import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    sno:1,
}

export const MainSlice = createSlice({
    name:"main",
    initialState:initialState,
    reducers:{
        next:(state)=>{
            state.value+=1
        },
        back:(state)=>{
            state.value-=1
        }
    }
})


export const {next, back} = MainSlice.actions
export default MainSlice.reducer