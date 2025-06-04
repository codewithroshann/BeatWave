import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
      user:null,
      visible:false,
    },
    reducers: {
        userData: (state, action) => {
           state.user = action.payload;
           state.visible=true
        },
        userLogedOut:(state)=>{
          state.user=null
          state.visible=false

        }
    }
})

export const { userData,userLogedOut } = AuthSlice.actions
export default AuthSlice.reducer