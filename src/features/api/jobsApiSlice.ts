import type { IJob } from '../../utils/types';
import { apiSlice } from './apiSlice';

export const jobsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query<{ jobs: IJob[] }, { limit?: number }>({
      query: ({ limit }) => `api/jobs?limit=${limit}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllJobsQuery } = jobsApi;
