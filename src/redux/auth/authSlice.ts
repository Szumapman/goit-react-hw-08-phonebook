import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";
import { isPendingAction, isRejectAction, handlePending, handleRejected } from "../../utils/actionUtils";

const initialState = {
    user: { name: null, email: null } as { name: string | null, email: string | null},
    token: null as null | string,
    isLoggedIn: false as boolean,
    isLoading: false as boolean,
    error: null as null | string,
    isRefreshing: false as boolean,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(logOut.fulfilled, () => initialState)
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, () => initialState)
            .addMatcher(isPendingAction, handlePending)
            .addMatcher(isRejectAction, handleRejected)
            .addDefaultCase((state, action) => {
                if (action.type.startsWith("auth/")) {
                    state.isLoading = false;
                    state.error = "Unknown action: " + action.type;
                }
            })
    }
});

export const authReducer = authSlice.reducer;