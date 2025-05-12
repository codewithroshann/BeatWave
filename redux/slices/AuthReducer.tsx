import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
       login: false,
    },
    reducers: {
        setLogin: (state, action) => {
            state.login = action.payload;
        },
    }
})

export const { setLogin } = AuthSlice.actions
export default AuthSlice.reducer