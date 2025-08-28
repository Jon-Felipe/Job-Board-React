// components
import Dropdown from '../../components/Dropdown/Dropdown';
import Button from '../../components/ui/Button/Button';
import JobCard from '../../components/JobCard/JobCard';

// extras
import { JobsPageContainer } from './JobPage.styles';
import { jobs, jobTypes, experienceLevel } from '../../utils/constants';

function JobsPage() {
  return (
    <JobsPageContainer>
      <section className='header'>
        <h3 className='header-title'>Find Your Favourite Job</h3>
        <p className='header-text'>
          Find jobs, create trackable resumes and enrich your applications
        </p>
      </section>
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
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </section>
      </div>
    </JobsPageContainer>
  );
}

export default JobsPage;
