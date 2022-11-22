import { configureStore } from '@reduxjs/toolkit'
import mainNavReducer from '../features/mainNav/mainNavSlice'

export const store = configureStore({
    reducer: {
        mainNav: mainNavReducer,
    },
})