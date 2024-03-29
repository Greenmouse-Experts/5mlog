import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./messages";

import apiFactory from "../../services/apiFactory";

const user = JSON.parse(localStorage.getItem("user"));

export const pickupService = createAsyncThunk(
    "/add/pickup/service",
    async (payload, thunkAPI) => {
        try {
            const response = await apiFactory.pickupService(payload);
            thunkAPI.dispatch(setMessage(response.data));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const adminPickupService = createAsyncThunk(
    "/add/pickup/service",
    async (payload, thunkAPI) => {
        try {
            const response = await apiFactory.adminPickupService(payload);
            thunkAPI.dispatch(setMessage(response.data));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const addFreight = createAsyncThunk(
    "/add/oversea/shipping",
    async (payload, thunkAPI) => {
        try {
            const response = await apiFactory.addFreight(payload);
            thunkAPI.dispatch(setMessage(response.data));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const adminAddFreight = createAsyncThunk(
    "/add/oversea/shipping",
    async (payload, thunkAPI) => {
        try {
            const response = await apiFactory.adminAddFreight(payload);
            thunkAPI.dispatch(setMessage(response.data));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);


export const addInterState = createAsyncThunk(
    "/add/inter-state/service",
    async (payload, thunkAPI) => {
        try {
            const response = await apiFactory.addInterState(payload);
            thunkAPI.dispatch(setMessage(response.data));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const adminAddInterState = createAsyncThunk(
    "/add/inter-state/service",
    async (payload, thunkAPI) => {
        try {
            const response = await apiFactory.AdminAddInterState(payload);
            thunkAPI.dispatch(setMessage(response.data));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);


export const addExpress = createAsyncThunk(
    "/add/express/shipping",
    async (payload, thunkAPI) => {
        try {
            const response = await apiFactory.addExpress(payload);
            thunkAPI.dispatch(setMessage(response.data));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const adminAddExpress = createAsyncThunk(
    "/add/express/shipping",
    async (payload, thunkAPI) => {
        try {
            const response = await apiFactory.adminAddExpress(payload);
            thunkAPI.dispatch(setMessage(response.data));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const addProcurement = createAsyncThunk(
    "/add/procurement",
    async (payload, thunkAPI) => {
        try {
            const response = await apiFactory.addProcurement(payload);
            thunkAPI.dispatch(setMessage(response.data));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const adminAddProcurement = createAsyncThunk(
    "/add/procurement",
    async (payload, thunkAPI) => {
        try {
            const response = await apiFactory.adminAddProcurement(payload);
            thunkAPI.dispatch(setMessage(response.data));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const addWarehousing = createAsyncThunk(
    "/add/warehousing",
    async (payload, thunkAPI) => {
        try {
            const response = await apiFactory.addWarehousing(payload);
            thunkAPI.dispatch(setMessage(response.data));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const adminAddWarehousing = createAsyncThunk(
    "/add/warehousing",
    async (payload, thunkAPI) => {
        try {
            const response = await apiFactory.adminAddWarehousing(payload);
            thunkAPI.dispatch(setMessage(response.data));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);



const initialState = user;
// const initialState = {
//     user:null
// };

const apiServicesSlice = createSlice({
    name: "settings",
    initialState,
    extraReducers: {
        [pickupService.fulfilled]: (state, action) => {
            state.user = action.payload.user;
        },
        [addFreight.fulfilled]: (state, action) => {
            state.user = action.payload.user;
        },
        [addInterState.fulfilled]: (state, action) => {
            state.user = action.payload.user;
        },
        [addExpress.fulfilled]: (state, action) => {
            state.user = action.payload.user;
        },
        [addWarehousing.fulfilled]: (state, action) => {
            state.user = action.payload.user;
        },
        [addProcurement.fulfilled]: (state, action) => {
            state.user = action.payload.user;
        },
        [adminPickupService.fulfilled]: (state, action) => {
            state.user = action.payload.user;
        },
        [adminAddFreight.fulfilled]: (state, action) => {
            state.user = action.payload.user;
        },
        [adminAddInterState.fulfilled]: (state, action) => {
            state.user = action.payload.user;
        },
        [adminAddExpress.fulfilled]: (state, action) => {
            state.user = action.payload.user;
        },
        [adminAddWarehousing.fulfilled]: (state, action) => {
            state.user = action.payload.user;
        },
        [adminAddProcurement.fulfilled]: (state, action) => {
            state.user = action.payload.user;
        },
    },
});

const { reducer } = apiServicesSlice;
export default reducer;