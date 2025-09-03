import { useGetAllJobsQuery } from '../../features/api/jobsApiSlice';

// components
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/ui/Button/Button';
import JobCard from '../../components/JobCard/JobCard';

// extras
import { JobsPageContainer, SpinnerContainer } from './JobsPage.styles';
import { jobTypes, experienceLevel } from '../../utils/constants';
import Spinner from '../../components/ui/Spinner/Spinner';

function JobsPage() {
  const { data, isLoading } = useGetAllJobsQuery({ limit: 9 });

  return (
    <JobsPageContainer>
      <section className='header'>
        <h3 className='header-title'>Find Your Favourite Job</h3>
        <p className='header-text'>
          Find jobs, create trackable resumes and enrich your applications
        </p>
      </section>
      {isLoading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <div className='jobsContainer'>
          <section className='jobsContainer-filters'>
            <h4>Filters</h4>
            <div className='jobsContainer-filterOptions'>
              <Dropdown title='Job Types' dropdownOptions={jobTypes} />
              <Dropdown
                title='Experience Level'
                dropdownOptions={experienceLevel}
              />
            </div>
            <Button
              type='button'
              variant='outlined'
              onClick={() => console.log('clear')}
            >
              Clear Filters
            </Button>
          </section>
          <section className='jobs'>
            {data?.jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </section>
        </div>
      )}
    </JobsPageContainer>
  );
}

export default JobsPage;
