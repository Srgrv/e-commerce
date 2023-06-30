import { configureStore } from "@reduxjs/toolkit";

//slices
import HomeSlice from "./slices/HomeSlice";

const store = configureStore({
  reducer: {
    home: HomeSlice,
  },
});

export default store;
