import { createSlice } from '@reduxjs/toolkit';

const initialState = 'ALL';

const filterSlice = createSlice({
    name: 'filter', 
    initialState: initialState,
    reducers: {
        changeFilter: (state, action) => {
            return action.payload;
        }
    }
})

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;