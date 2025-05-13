import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
      user:{}
    },
    reducers: {
        authLogedIn: (state, action) => {
           state.user = action.payload;
        },
        authLogedOut:(state,action)=>{
          state.user

        }
    }
})

export const { authLogedIn,authLogedOut } = AuthSlice.actions
export default AuthSlice.reducer