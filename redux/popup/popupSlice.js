import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpened: false
}

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        changeOpenedStatus: (state) => {
            state.isOpened = !state.isOpened;
        },
    }
});

export const popupReducer = popupSlice.reducer;

export const { changeOpenedStatus } = popupSlice.actions;