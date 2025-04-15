import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue, getState }) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/users?username=${username}&password=${password}`
      );
      if (res.data.length > 0) {
        console.log(getState());
        return res.data[0];
      } else {
        return rejectWithValue("Invalid username or password");
      }
    } catch (error) {
      return rejectWithValue("Login failed : " + error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    status: "idle",
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      // state.user = null;
      // state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export default authSlice.reducer;
export const { logout } = authSlice.actions;
