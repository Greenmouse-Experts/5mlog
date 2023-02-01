import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import transact from "../../services/Transact";


const initialState= {
    transact: [],
    success: false,
}


export const getTransact = createAsyncThunk( 
    "/get/transact",
    async (thunkAPI) => {
        try {
            const response = await transact.getTransact();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const transactSlice = createSlice({
    name: "transact",
    initialState,
    extraReducers: {
        [getTransact.pending]: (state, action) => {
            state.success = false;
        },
        [getTransact.fulfilled]: (state, action) => {
            state.success = true;
            state.Transact = action.payload

        },
    },
});

const { reducer } = transactSlice;
export default reducer;