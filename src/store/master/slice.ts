import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fakeApi, IMaster } from "../../mock/fakeApi";

export const fetchMasters = createAsyncThunk("masters/fetchAll", async () => {
    return await fakeApi.getMasters();
});

export const addMaster = createAsyncThunk(
    "masters/add",
    async (name: string) => {
        return await fakeApi.addMaster(name);
    }
);

const masterSlice = createSlice({
    name: "masters",
    initialState: [] as IMaster[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMasters.fulfilled, (_, action) => action.payload);
        builder.addCase(addMaster.fulfilled, (state, action) => {
            state.push(action.payload);
        });
    },
});

export default masterSlice.reducer;
