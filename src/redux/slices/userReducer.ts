import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
    isAuth: false,
    zakat_amount: '',
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

    setZakatAmount: (state, action) => {
      console.log({state, action});
      state.zakat_amount = action.payload.zakat_amount;
    },

    resetZakatAmount: state => {
      state.zakat_amount = '';
    },
  },
});

export const {
  addUser,
  addToken,
  isAuthHandler,
  resetZakatAmount,
  setZakatAmount,
} = userSlice.actions;

export default userSlice.reducer;
