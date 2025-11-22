import { createSlice } from "@reduxjs/toolkit";

const initialAccess = localStorage.getItem("access");
const initialRefresh = localStorage.getItem("refresh");
const initialUsername = localStorage.getItem("username");

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: !!initialAccess,
    username: null,
    access: initialAccess,
    refresh: initialRefresh,
  },
  reducers: {
    setUser(state, action) {
      state.isAuthenticated = true;
      state.username = action.payload.username || state.username;
      state.access = action.payload.access || state.access;
      state.refresh = action.payload.refresh || state.refresh;
      // persist
      if (action.payload.access) localStorage.setItem("access", action.payload.access);
      if (action.payload.refresh) localStorage.setItem("refresh", action.payload.refresh);
      if (action.payload.username) localStorage.setItem("username", action.payload.username);
    
    
    },
    logout(state) {
      state.isAuthenticated = false;
      state.username = null;
      state.access = null;
      state.refresh = null;
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("username");
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
