import styles from './JobCard.module.css';

// components
import Tab from '../ui/Tab/Tab';
import Button from '../ui/Button/Button';

// extras
import type { IJob } from '../../utils/types';

type JobCardProps = {
  job: Partial<IJob>;
};

function JobCard({ job }: JobCardProps) {
  return (
    <article className={styles.jobCard}>
      <div className={styles.tabs}>
        <Tab>{job.employmentType}</Tab>
        <Tab>{job.location}</Tab>
      </div>
      <h5 className={styles.company}>{job.company}</h5>
      <h3 className={styles.title}>{job.title}</h3>
      <div className={styles.details}>
        <p>{job.industry}</p>
        <span>|</span>
        <p>
          ${job.salaryFrom?.toLocaleString()} - $
          {job.salaryTo?.toLocaleString()}/year
        </p>
      </div>
      <Button variant='inverted' onClick={() => console.log('Apply Now')}>
        Apply Now
      </Button>
    </article>
  );
}

export default JobCard;
