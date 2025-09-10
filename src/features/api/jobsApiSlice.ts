import type { IJob } from '../../utils/types';
import { apiSlice } from './apiSlice';

type JobQueryParams = {
  limit?: number;
  employmentType?: string[];
  experienceLevel?: string[];
};

export const jobsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query<{ jobs: IJob[] }, JobQueryParams>({
      query: ({ limit, employmentType, experienceLevel }) => {
        const params = new URLSearchParams();

        if (limit !== undefined) params.append('limit', String(limit));

        if (employmentType?.length)
          params.append('employmentType', employmentType.join(','));

        if (experienceLevel?.length)
          params.append('experienceLevel', experienceLevel.join(','));

        return `jobs?${params.toString()}`;
      },
    }),
    getJob: builder.query<{ job: IJob }, string>({
      query: (id) => `jobs/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllJobsQuery, useGetJobQuery } = jobsApi;
