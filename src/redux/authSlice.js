import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login_selected: true,
    register_selected: false,
};

const authSlice = createSlice({
    name: "auth_selection",
    initialState,
    reducers: {
        selectLogin: (state) => {
            state.login_selected = true;
            state.register_selected = false;
        },
        selectRegister: (state) => {
            state.register_selected = true;
            state.login_selected = false;
        }
    },
});

export const { selectLogin, selectRegister } = authSlice.actions;
export default authSlice.reducer;