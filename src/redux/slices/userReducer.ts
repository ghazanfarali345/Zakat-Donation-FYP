import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
    isAuth: false,
  },
  reducers: {
    addUser: (state, action) => {
      console.log({state, action});
      state.user = action.payload.user;
    },
    addToken: (state, action) => {
      console.log({state, action});

      state.token = action.payload.token;
    },
    isAuthHandler: (state, action) => {
      console.log({state, action});

      state.isAuth = action.payload.isAuth;
    },
  },
});

export const {addUser, addToken, isAuthHandler} = userSlice.actions;

export default userSlice.reducer;
