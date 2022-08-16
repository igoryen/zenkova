import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentPage: "home",
}

export const mainNavSlice = createSlice({
    name: 'mainNav',
    initialState,
    reducers: {
        switchToPage: (state, action) => {
            state.currentPage = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { switchToPage } = mainNavSlice.actions

export default mainNavSlice.reducer