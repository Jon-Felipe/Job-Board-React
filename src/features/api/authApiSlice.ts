import { apiSlice } from './apiSlice';
import type {
  BasicUserInfo,
  IUser,
  LoginUserInfo,
  UserRegisterDetails,
} from '../../utils/types';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<
      { user: BasicUserInfo },
      UserRegisterDetails
    >({
      query: (userDetails) => ({
        url: 'auth/register',
        method: 'POST',
        body: userDetails,
      }),
    }),
    loginUser: builder.mutation<{ user: IUser }, LoginUserInfo>({
      query: (userDetails) => ({
        url: 'auth/login',
        method: 'POST',
        body: userDetails,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
