import { configureStore } from "@reduxjs/toolkit";
import masterReducer from "./master/slice";
import slotReducer from "./slot/slice";
import bookingReducer from "./booking/slice";
import userReducer from "./user/slice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        masters: masterReducer,
        slots: slotReducer,
        bookings: bookingReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
