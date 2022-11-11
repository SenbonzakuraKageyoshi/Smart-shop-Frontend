import { configureStore } from "@reduxjs/toolkit";
import { popupReducer } from "./popup/popupSlice";
import { userReducer } from "./user/userSlice";
import { favoritesReducer } from "./favorites/favoritesSlice";

const store = configureStore({
    reducer: {
        popup: popupReducer,
        user: userReducer,
        favorites: favoritesReducer,
    }
});

export default store;