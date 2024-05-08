import { createSlice } from "@reduxjs/toolkit";
// import dayjs from "dayjs";
import store from "store";
import { LocalStorage } from "../../constants/local-storage";
import expirePlugin from "store/plugins/expire";
import { RootState } from "..";
store.addPlugin(expirePlugin);

const theme: any = {
  colorCode: "#ed4657",
};
// Define a type for the slice state
interface UserState {
  email: string;
  accessToken: string | undefined;
  userType: string;
  theme: {
    colorCode: "#ed4657";
  };
}

const existingUser = store.get(LocalStorage.USER_KEY) || undefined;

// Define the initial state using that type
const initialState: UserState = {
  email: existingUser?.email || "",
  accessToken: existingUser?.accessToken || "",
  userType: existingUser?.userType || "",
  theme: existingUser?.app.theme || theme,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.email = payload.email;
      state.accessToken = payload.accessToken;
      // state.userType = payload.userType;
      state.theme = payload.app.theme;

      store.set(LocalStorage.USER_KEY, payload);
    },
    removeUser: (state) => {
      state.email = "";
      state.accessToken = "";
      // state.userType = "";
      state.theme = theme;

      store.remove(LocalStorage.USER_KEY);
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const getUserInfo = (state: RootState) => state.user;

export default userSlice.reducer;