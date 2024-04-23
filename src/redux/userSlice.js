import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    name: "",
    username: "",
    email: {
      email_address: "",
      isVarified: false,
    },
    password: "",
    avatar: "",
    location: "",
    roles: [],
  },
  signup_step: {
    first_complete: false,
    second_complete: false,
    third_complete: false,
    fourth_complete: false,
  },
};



export const userSlice = createSlice({
  name: "User",
  initialState: initialState,

  reducers: {
    singUp_Info: (state, action) => {
      console.log("This is action.payload", action.payload);
      const { name, username, email, password } = action.payload;
      state.userInfo.name = name;
      state.userInfo.username = username;
      state.userInfo.email.email_address = email;
      state.userInfo.password = password;
      state.signup_step.first_complete = true;
    },

    add_avatar: (state, action) => {
      const { image, location } = action.payload;
      state.userInfo.avatar = image;
      state.userInfo.location = location;
      state.signup_step.second_complete = true;
    },

    add_role: (state, action) => {
      const selectedRoles = action.payload;
      state.userInfo.roles = selectedRoles;
      state.signup_step.third_complete = true;
    },
  },
});

export const { singUp_Info, add_avatar, add_role } = userSlice.actions;
export default userSlice.reducer;