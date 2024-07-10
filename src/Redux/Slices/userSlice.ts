import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface UserState {
  isLoggedIn: boolean;
  email: any;
  name: any;
  password: any;
  message: any;
  result: any;
  role: any;
  status: any;
  success: any;
  token: any;
  userInfo: any;
}

const initialState: UserState = {
  isLoggedIn: false,
  email: null,
  name: "",
  password: null,
  message: "",
  result: 0,
  role:{},
  status: 0,
  success: "",
  token: null,
  userInfo: {},
};

export const AuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setSignUp: (state, action: PayloadAction<any>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.password = action.payload.password;
    },
    setLogin: (state, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.message = action.payload.message;
      state.status = action.payload.status;
      state.success = action.payload.success;
      state.token = action.payload.token;
      state.role = action.payload;
      console.log("Redux action~~~ ", action.payload);
    },
    setDetail: (state, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setSignUp, setLogin, setDetail } = AuthSlice.actions;
export default AuthSlice.reducer;
