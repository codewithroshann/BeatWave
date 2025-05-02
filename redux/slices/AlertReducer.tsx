import { createSlice } from '@reduxjs/toolkit';

interface AlertState {
    message: string | null;
    type: string | null;
    visible: boolean;
}


const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        message: null,
        type: null,
        visible: false
    } as AlertState,
    reducers: {
        setAlert: (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
            state.visible = true
        },
        clearAlert: (state) => {
            state.message = '';
            state.type = '';
            state.visible = false;
        },

    }
})
export const { setAlert, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;