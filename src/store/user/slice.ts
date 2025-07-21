import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fakeApi } from "../../mock/fakeApi";

export interface UserState {
    data: {
        id: number;
        role: "user" | "admin";
        first_name: string;
        last_name?: string;
        username?: string;
    } | null;
}

const initialState: UserState = {
    data: null,
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    const user = await fakeApi.getUser();
    return user;
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});

export default userSlice.reducer;
