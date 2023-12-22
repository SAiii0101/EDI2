import {configureStore} from '@reduxjs/toolkit'
import MainSlice from './slices/MainSlice'

export const store = configureStore({
    reducer:{
        main: MainSlice
    }
})