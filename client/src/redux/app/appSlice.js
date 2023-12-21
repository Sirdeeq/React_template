import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgColor: "#331800",
  logo: "Your Logo",
  otherDetails: null,
  error: null,
  loading: false
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppColor: (state, action) => {
      state.bgColor = action.payload;
    },
    setAppLogo: (state, action) => {
      state.logo = action.payload;
    },
    setOtherDetails: (state, action) => {
      state.otherDetails = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const {
  setAppColor,
  setAppLogo,
  setOtherDetails,
  setError,
  setLoading
} = appSlice.actions;

export default appSlice.reducer;
