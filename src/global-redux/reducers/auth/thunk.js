import axios from "axios";
import { BASE_URL } from "../../../config/constants";

export const login = async (data, thunkAPI) => {
  try {
    let props = await axios.post(`${BASE_URL}/api/user/authenticate`, data);
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const register = async (data, thunkAPI) => {
  try {
    let props = await axios.post(`${BASE_URL}/api/user/addUser`, data);
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
