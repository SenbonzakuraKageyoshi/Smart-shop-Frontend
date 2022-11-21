import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpened: null,
    componentName: null,
}

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        changeOpenedStatus: (state, action) => {
            state.isOpened = action.payload.payload.isOpened;
            state.componentName = action.payload.payload.componentName;
        },
    }
});

export const popupReducer = popupSlice.reducer;

export const { changeOpenedStatus } = popupSlice.actions;