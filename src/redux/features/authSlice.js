import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  authToken: "",
  hasError: false,
};

const authenticateUserService = async () => {
  const response = await axios.get;
};
const authenticateUserAction = createAsyncThunk(
  "auth/authUser",
  async (_, thunkAPI) => {
    try {
      const response = await authenticateUserAction();
    } catch (error) {}
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});
