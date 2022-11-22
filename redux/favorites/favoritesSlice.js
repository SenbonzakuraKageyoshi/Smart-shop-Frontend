import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { myAxios } from "../../utils/myAxios";

export const fetchFavorites = createAsyncThunk('products/get-favorites', async ({userId, token}) => {
    const { data } = await myAxios.post(`/products/get-liked-products?isObject=true&currentUserId=${userId}`, null, {headers: {
        Authorization: 'Bearer ' + token
    }});
    return data;
});

const initialState = {
    data: null,
    status: null,
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        removeFavorite: (state, action) => {
            delete state.data[action.payload]
        },
        addFavorite: (state, action) => {
            state.data[action.payload] = true;
        },
        setFavoritesError: (state) => {
            state.data = null;
            state.status = 'rejected';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFavorites.pending, (state) => {
            state.data = null;
            state.status = 'pending';
        });
        builder.addCase(fetchFavorites.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchFavorites.rejected, (state) => {
            state.data = null;
            state.status = 'rejected';
        });
    }
});

export const favoritesReducer = favoritesSlice.reducer;

export const { removeFavorite, addFavorite, setFavoritesError } = favoritesSlice.actions;