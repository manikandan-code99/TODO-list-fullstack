import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../api/axios";

// GET /feedback/ user's feedback list
export const fetchFeedback = createAsyncThunk(
  "feedback/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("feedback/");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// POST /feedback/ create new feedback
export const createFeedback = createAsyncThunk(
  "feedback/create",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await api.post("feedback/", payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearFeedback(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeedback.pending, (s) => { 
        s.loading = true; 
        s.error = null; 
    })
      .addCase(fetchFeedback.fulfilled, (s, a) => { s.loading = false; s.items = a.payload; })
      .addCase(fetchFeedback.rejected, (s, a) => { s.loading = false; s.error = a.payload; })

      .addCase(createFeedback.pending, (s) => { s.error = null; })
      .addCase(createFeedback.fulfilled, (s, a) => { s.items.unshift(a.payload); })
      .addCase(createFeedback.rejected, (s, a) => { s.error = a.payload; });
  },
});

export const { clearFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
