import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { myAxios } from "../../utils/myAxios";

const namespace = 'auth'

export const fetchRegister = createAsyncThunk('auth/register', async (payload) => {
    const { data } = await myAxios.post(`/${namespace}/register`, payload);
    return data;
});

export const fetchLogin = createAsyncThunk('auth/login', async (payload) => {
    const { data } = await myAxios.post(`/${namespace}/login`, payload);
    return data;
});

export const fetchMe = createAsyncThunk('auth/get-me', async (token) => {
    const { data } = await myAxios.post(`/${namespace}/get-me`, null, {headers: {
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
    extraReducers: (builder) => {
        builder.addCase(fetchRegister.pending, (state) => {
            state.data = null;
            state.status = 'pending';
        });
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchRegister.rejected, (state) => {
            state.data = null;
            state.status = 'pending';
        });
        builder.addCase(fetchLogin.pending, (state) => {
            state.data = null;
            state.status = 'pending';
        });
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchLogin.rejected, (state) => {
            state.data = null;
            state.status = 'pending';
        });
        builder.addCase(fetchMe.pending, (state) => {
            state.data = null;
            state.status = 'pending';
        });
        builder.addCase(fetchMe.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchMe.rejected, (state) => {
            state.data = null;
            state.status = 'pending';
        });
    }
});

export const userReducer = userSlice.reducer;

export const { logout, setUserError } = userSlice.actions;