import { configureStore } from "@reduxjs/toolkit";
import { popupReducer } from "./popup/popupSlice";
import { userReducer } from "./user/userSlice";

const store = configureStore({
    reducer: {
        popup: popupReducer,
        user: userReducer,
    }
});

export default store;