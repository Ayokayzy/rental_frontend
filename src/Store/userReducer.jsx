import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadUser } from "../../Apis/Auth";

export const initialState = {
  user: {},
  isAuth: false,
  role: "",
  loading: false,
  error: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUser: (state, { payload }) => {
      if (payload.token) {
        state.token = payload.token;
      }
      state.user = payload.user;
      state.role = payload.user.privilege;
      state.isAuth = true;
    },
    logout: (state) => {
      localStorage.removeItem("authToken");
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      // state.user = payload.user;
    });
    builder.addCase(fetchUser.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error;
    });
  },
});

export default user.reducer;
export const { storeUser, logout } = user.actions;

export const fetchUser = createAsyncThunk(
  "user/loadUser",
  async (_, thunkAPI) => {
    try {
      const res = await loadUser();
      thunkAPI.dispatch(storeUser(res));
      return res;
    } catch (err) {
      console.log({ loadUserErr: err });
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
