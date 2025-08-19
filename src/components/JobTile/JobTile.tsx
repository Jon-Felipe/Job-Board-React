// components
import Button from '../ui/Button/Button';

// extras
import { JobTileContainer } from './JobTile.styles';
import type { IJob } from '../../utils/types';

type JobTileProps = {
  job: Partial<IJob>;
};

function JobTile({ job }: JobTileProps) {
  return (
    <JobTileContainer>
      <h2 className='jobTile-title'>{job.title}</h2>
      <p className='jobTile-industry'>{job.industry}</p>
      <div className='jobTile-info'>
        <p className='jobTile-location'>{job.location}</p>
        <p className='jobTile-employmentType'>{job.employmentType}</p>
        <Button
          type='button'
          variant='outlined'
          onClick={() => console.log('Apply Now')}
        >
          Apply Now
        </Button>
      </div>
    </JobTileContainer>
  );
}

export default JobTile;
