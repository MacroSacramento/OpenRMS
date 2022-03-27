import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        visible: false
    },
    reducers: {
        show: (state) => {
            state.visible = true;
        },
        hide: (state) => {
            state.visible = false;
        }
    }
});

export const { show, hide } = alertSlice.actions;
export default alertSlice.reducer;