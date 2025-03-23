import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterCredentials } from "../../types/RegisterCredentials";
import axios from "axios";
import { LoginCredentials } from "../../types/LoginCredentials";
import { setAuthHeader } from "../../config/axiosConfig";
import { RootState } from "../store";


const register = createAsyncThunk("auth/register", async (credentials: RegisterCredentials, thunkAPI) => {
    try {
        console.log(axios.defaults.baseURL);
        const res = await axios.post("/users/signup", credentials);
        setAuthHeader(res.data.token);
        return res.data;
    } catch (err: string | any) {
        return thunkAPI.rejectWithValue(err.message);
    }
});


const logIn = createAsyncThunk("auth/login", async (credentials: LoginCredentials, thunkAPI) => {
    try {
        const res = await axios.post("/users/login", credentials);
        setAuthHeader(res.data.token);
        return res.data;
    } catch (err: string | any) {
        return thunkAPI.rejectWithValue(err.message);
    }
});


const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        await axios.post("/users/logout");
        setAuthHeader();
    } catch (err: string | any) {
        return thunkAPI.rejectWithValue(err.message);
    }
});


const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const token = (thunkAPI.getState() as RootState).auth.token;
    if (!token) {
        return thunkAPI.rejectWithValue("Unable to fetch user - no token found");
    }
    try {
        setAuthHeader(token);
        const res = await axios.get("/users/current");
        return res.data;
    } catch (err: string | any) {
        return thunkAPI.rejectWithValue(err.message);
    }
});


export { register, logIn, logOut, refreshUser };