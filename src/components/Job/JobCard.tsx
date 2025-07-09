import styles from './JobCard.module.css';

import type { IJob } from '../../utils/types';

type JobCardProps = {
  job: Partial<IJob>;
};

function JobCard({ job }: JobCardProps) {
  return <article className={styles.jobCard}>{job.title}</article>;
}

export default JobCard;
