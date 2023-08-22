import { CreateSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {},
    token: "",
    isLoading: false,
    loading: false,
    error: null
}

const authSlice = ({
    name: "auth",
    initialState,
    extraReducers: {

    }

})

export default authSlice.reducer