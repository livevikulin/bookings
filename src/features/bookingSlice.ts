import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookingState {
  service: string;
  time: string;
}

const initialState: BookingState = {
  service: "",
  time: "",
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBooking: (state, action: PayloadAction<BookingState>) => {
      state.service = action.payload.service;
      state.time = action.payload.time;
    },
  },
});

export const { setBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
