import styles from './Job.module.css';

// components
import JobCategoryLink from './JobCategoryLink';

// extras
import { jobCategories } from '../../utils/constants';

function Job() {
  return (
    <section className={styles.job}>
      <h1 className={styles.title}>Find your favourite job</h1>
      <div className={styles.jobCategories}>
        {jobCategories.map((jobCategory) => (
          <JobCategoryLink key={jobCategory.id} />
        ))}
      </div>
    </section>
  );
}

export default Job;
