import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fakeApi, IBooking } from "../../mock/fakeApi";

export const addBooking = createAsyncThunk(
    "booking/add",
    async (data: IBooking) => {
        return await fakeApi.addBooking(data);
    }
);

const bookingSlice = createSlice({
    name: "bookings",
    initialState: [] as IBooking[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addBooking.fulfilled, (state, action) => {
            state.push(action.meta.arg);
        });
    },
});

export default bookingSlice.reducer;
