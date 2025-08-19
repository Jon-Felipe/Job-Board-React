// components
import Tab from '../ui/Tab/Tab';

// extras
import { JobCardContainer } from './JobCard.styles';
import type { IJob } from '../../utils/types';
import LinkButton from '../ui/LinkButton/LinkButton';

type JobCardProps = {
  job: IJob;
};

function JobCard({ job }: JobCardProps) {
  return (
    <JobCardContainer>
      <div className='tabs'>
        <Tab>{job.employmentType}</Tab>
        <Tab>{job.location}</Tab>
      </div>
      <h5 className='company'>{job.company}</h5>
      <h3 className='title'>{job.title}</h3>
      <div className='details'>
        <p>{job.industry}</p>
        <span>|</span>
        <p>
          ${job.salaryFrom?.toLocaleString()} - $
          {job.salaryTo?.toLocaleString()}/year
        </p>
      </div>
      <LinkButton variant='primary' size='medium' path={`/jobs/${job.id}`}>
        Apply Now
      </LinkButton>
    </JobCardContainer>
  );
}

export default JobCard;
