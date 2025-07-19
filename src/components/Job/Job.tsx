import { useState } from 'react';
import { FaTh, FaBars } from 'react-icons/fa';

// components
import JobCategoryLink from './JobCategoryLink';
import JobCard from './JobCard';

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
        <a href='#' className={styles.viewAllJobsLink}>
          View All Jobs
        </a>
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
      <div className={styles.jobs}>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}

export default Job;
