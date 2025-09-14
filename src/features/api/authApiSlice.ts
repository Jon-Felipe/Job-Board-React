import { apiSlice } from './apiSlice';
import type {
  IUser,
  UserRegisterPayload,
  UserLoginDetails,
  UserRegisterDetails,
} from '../../utils/types';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<
      { user: UserRegisterPayload },
      UserRegisterDetails
    >({
      query: (userDetails) => ({
        url: 'auth/register',
        method: 'POST',
        body: userDetails,
      }),
    }),
    loginUser: builder.mutation<{ user: Partial<IUser> }, UserLoginDetails>({
      query: (userDetails) => ({
        url: 'auth/login',
        method: 'POST',
        body: userDetails,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
