import { useState } from 'react';
import { FaTh, FaBars } from 'react-icons/fa';

// components
import JobCategoryLink from './JobCategoryLink';
import LinkButton from '../ui/LinkButton/LinkButton';
import JobCard from './JobCard';
import JobTile from './JobTile';

// extras
import styles from './Job.module.css';
import { jobCategories, jobs } from '../../utils/constants';

function Job() {
  const [isCardView, setIsCardView] = useState<boolean>(true);

  return (
    <section className={styles.job}>
      <h1 className={styles.title}>Find your favourite job</h1>
      <div className={styles.jobCategories}>
        {jobCategories.map((jobCategory) => (
          <JobCategoryLink key={jobCategory.id} title={jobCategory.title} />
        ))}
      </div>
      <div className={styles.jobsListActions}>
        <LinkButton variant='text' path='jobs'>
          View All Jobs
        </LinkButton>
        <div className={styles.jobLayoutButtons}>
          <button
            onClick={() => setIsCardView(false)}
            className={!isCardView ? styles.isActive : ''}
          >
            <FaBars />
          </button>
          <button
            onClick={() => setIsCardView(true)}
            className={isCardView ? styles.isActive : ''}
          >
            <FaTh />
          </button>
        </div>
      </div>
      <div className={isCardView ? styles.jobCards : styles.jobTiles}>
        {jobs.map((job) =>
          isCardView ? (
            <JobCard key={job.id} job={job} />
          ) : (
            <JobTile key={job.id} job={job} />
          )
        )}
      </div>
    </section>
  );
}

export default Job;
