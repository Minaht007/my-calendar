
import { createSlice } from "@reduxjs/toolkit"
import initialState from "../../components/calendar/RegestriForm/InitialState.jsx"

// const initialState = {
//     user: {},
//     token: "",
//     isLoading: false,
//     loading: false,
//     error: null
// }

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        setUser(state, action) {
            state.email = action.payload.initialState.email;
            state.token = action.payload.initialState.token;
            state.id = action.payload.initialState.id;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        }
    }

})
export const {setUser, removeUser} = authSlice.actions
export default authSlice.reducer