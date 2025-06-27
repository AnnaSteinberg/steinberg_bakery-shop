import {createSlice} from "@reduxjs/toolkit";

type AuthState = {
    authUser: string
}

const initialState: AuthState = {
    authUser: ""
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginAction: (state, action) => {
            state.authUser = action.payload;
            console.log('authSlice - ' + action.payload);
        },
        logoutAction: (state) => {
            state.authUser = '';
        }
    }
})

export const {loginAction, logoutAction} = authSlice.actions;
export const authReducer = authSlice.reducer;