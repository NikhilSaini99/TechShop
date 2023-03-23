import { createSlice } from "@reduxjs/toolkit";


const initialState = { loginStatus: false, loginUserName: null }
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginCheck: (state, action) => {
            // eslint-disable-next-line no-unused-expressions
            state.loginStatus=action.payload.status
            state.loginUserName=action.payload.username
        }
    }
})

export const { setLoginCheck } = loginSlice.actions
export default loginSlice.reducer