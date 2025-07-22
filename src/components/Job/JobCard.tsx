// components
import Tab from '../ui/Tab/Tab';

// extras
import styles from './JobCard.module.css';
import type { IJob } from '../../utils/types';
import LinkButton from '../ui/LinkButton/LinkButton';

type JobCardProps = {
  job: IJob;
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
      <LinkButton variant='primary' path={job.id}>
        Apply Now
      </LinkButton>
    </article>
  );
}

export default JobCard;
