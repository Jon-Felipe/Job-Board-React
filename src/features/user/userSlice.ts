import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { BasicUserInfo, IUser } from '../../utils/types';

const initialState: IUser = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  age: '',
  address: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<BasicUserInfo>) => {
      const { payload } = action;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
    },
    loginUser: (state, action: PayloadAction<IUser>) => {
      Object.assign(state, action.payload);
    },
    updateUser: (state, action: PayloadAction<IUser>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { registerUser, loginUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
