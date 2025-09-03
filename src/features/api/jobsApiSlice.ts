import type { IJob } from '../../utils/types';
import { apiSlice } from './apiSlice';

export const jobsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query<{ jobs: IJob[] }, void>({
      query: () => `api/jobs`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllJobsQuery } = jobsApi;
