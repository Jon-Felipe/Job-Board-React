import { apiSlice } from './apiSlice';
import type { BasicUserInfo, UserRegisterDetails } from '../../utils/types';

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
  }),
});

export const { useRegisterUserMutation } = authApi;
