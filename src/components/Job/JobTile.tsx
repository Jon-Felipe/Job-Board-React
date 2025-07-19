// components
import Button from '../ui/Button/Button';

// extras
import styles from './JobTile.module.css';
import type { IJob } from '../../utils/types';

type JobTileProps = {
  job: Partial<IJob>;
};

function JobTile({ job }: JobTileProps) {
  return (
    <article className={styles.jobTile}>
      <h2 className={styles.title}>{job.title}</h2>
      <p className={styles.industry}>{job.industry}</p>
      <div className={styles.jobInfo}>
        <p className={styles.location}>{job.location}</p>
        <p className={styles.employmentType}>{job.employmentType}</p>
        <Button variant='inverted' onClick={() => console.log('Apply Now')}>
          Apply Now
        </Button>
      </div>
    </article>
  );
}

export default JobTile;
