import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fakeApi, ISlot } from "../../mock/fakeApi";

export const fetchSlots = createAsyncThunk(
    "slots/fetchAll",
    async (masterId?: number) => {
        return await fakeApi.getSlots(masterId);
    }
);

export const addSlot = createAsyncThunk(
    "slots/add",
    async (data: Omit<ISlot, "id">) => {
        return await fakeApi.addSlot(data);
    }
);

const slotSlice = createSlice({
    name: "slots",
    initialState: [] as ISlot[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSlots.fulfilled, (_, action) => action.payload);
        builder.addCase(addSlot.fulfilled, (state, action) => {
            state.push(action.payload);
        });
    },
});

export default slotSlice.reducer;
