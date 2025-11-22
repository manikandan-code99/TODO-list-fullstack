import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import feedbackReducer from "./Feedbackslice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    feedback: feedbackReducer,
  },
});
