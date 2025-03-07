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
      .addCase(setupLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.authAddSuccess = true;
        toast.success("Login Success");
        sessionStorage.setItem("nino", payload?.user?.nino);
      })
      .addCase(setupLogin.rejected, (state) => {
        state.loading = false;
        toast.error("An error has occurred. Please try again later.");
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
        toast.error("An error has occurred. Please try again later.");
      });
  },
});

export const { resetAuthAddSuccess } = slice.actions;

export default slice.reducer;
