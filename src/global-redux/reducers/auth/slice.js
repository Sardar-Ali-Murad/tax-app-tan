import { toast } from "react-toastify";
import { login, register } from "./thunk";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  authAddSuccess: false,
};

export const setupLogin = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    return login(data, thunkAPI);
  }
);

export const setupRegister = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    return register(data, thunkAPI);
  }
);

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthAddSuccess: (state) => {
      state.authAddSuccess = false;
    },
  },
  extraReducers: (builder) => {
    // Handle Login
    builder
      .addCase(setupLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupLogin.fulfilled, (state) => {
        state.loading = false;
        state.authAddSuccess = true;
        toast.success("Login Success");
      })
      .addCase(setupLogin.rejected, (state) => {
        state.loading = false;
      });
    // Handle Register
    builder
      .addCase(setupRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupRegister.fulfilled, (state) => {
        state.loading = false;
        state.authAddSuccess = true;
        toast.success("User Added Successfully");
      })
      .addCase(setupRegister.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { resetAuthAddSuccess } = slice.actions;

export default slice.reducer;
