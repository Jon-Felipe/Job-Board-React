import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IUserState {
  firstName: string;
  lastName: string;
  email: string;
}

const initialState: IUserState = {
  firstName: '',
  lastName: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUserState>) => {
      const { payload } = action;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
