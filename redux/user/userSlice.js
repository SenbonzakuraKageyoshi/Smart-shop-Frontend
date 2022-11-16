import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { myAxios } from "../../utils/myAxios";

export const fetchRegister = createAsyncThunk('auth/register', async (payload) => {
    const { data } = await myAxios.post(`/auth/register`, payload);
    return data;
});

export const fetchLogin = createAsyncThunk('auth/login', async (payload) => {
    const { data } = await myAxios.post(`/auth/login`, payload);
    return data;
});

export const fetchMe = createAsyncThunk('auth/get-me', async (token) => {
    const { data } = await myAxios.post(`/auth/get-me`, null, {headers: {
        Authorization: 'Bearer ' + token
    }});
    return data;
});

const initialState = {
    data: null,
    status: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
            state.status = null;
        },
        setUserError: (state) => {
            state.data = null;
            state.status = 'rejected';
        }
    },
    extraReducers: {
        [fetchRegister.pending] : (state) => {
            state.data = null;
            state.status = 'pending';
        },
        [fetchRegister.fulfilled] : (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        },
        [fetchRegister.rejected] : (state) => {
            state.data = null;
            state.status = 'rejected';
        },
        [fetchLogin.pending] : (state) => {
            state.data = null;
            state.status = 'pending';
        },
        [fetchLogin.fulfilled] : (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        },
        [fetchLogin.rejected] : (state) => {
            state.data = null;
            state.status = 'rejected';
        },
        [fetchMe.pending] : (state) => {
            state.data = null;
            state.status = 'pending';
        },
        [fetchMe.fulfilled] : (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        },
        [fetchMe.rejected] : (state) => {
            state.data = null;
            state.status = 'rejected';
        },
    }
});

export const userReducer = userSlice.reducer;

export const { logout, setUserError } = userSlice.actions;