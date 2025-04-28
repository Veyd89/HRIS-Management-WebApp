/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const BASE_URL = "http://localhost:3000/users";
// AsyncThunk	= Payload yang berasal dari return statement dalam fungsi async
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue, getState }) => {
    console.log(getState());
    try {
      // useEffect(() => {
      //   console.log(getState());
      // }, [getState]);
      const res = await axios.post(BASE_URL, { email, password });
      console.log(res.data);
      // if (res.data.length > 0) {
      //   return res.data[0];
      // } else {
      //   return rejectWithValue("Invalid email or password");
      // }
    } catch (error) {
      return rejectWithValue("Login failed : " + error.message);
    }
  }
);
export const registUser = createAsyncThunk(
  "auth/register",
  async (newUser, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}?email=${newUser.email}`);
      if (res.data.length > 0) {
        return rejectWithValue("Email is already registered");
      }
      const response = await axios.post(BASE_URL, newUser);
      return response.data;
    } catch (error) {
      return rejectWithValue("Sign up failed: " + error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    apiURL: BASE_URL,
    user: null,
    isAuthenticated: false,
    status: "idle",
    message: "",
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
    builder
      .addCase(registUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registUser.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(registUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        //akan berisi salah satu dari rejectWithValue tergantung kondisinya
      });
  },
});
export default authSlice.reducer;
export const { logout } = authSlice.actions;
