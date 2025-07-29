import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IUser } from '../../utils/types';

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
    addUser: (state, action: PayloadAction<IUser>) => {
      const { payload } = action;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
    },
    updateUser: (state, action: PayloadAction<IUser>) => {
      const { payload } = action;
      return {
        ...state,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phone: payload.phone,
        age: payload.age,
        address: payload.address,
      };
    },
  },
});

export const { addUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
