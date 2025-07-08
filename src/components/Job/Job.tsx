import { jobCategories } from '../../utils/constants';
import styles from './Job.module.css';

function Job() {
  return (
    <section className={styles.job}>
      <h1 className={styles.title}>Find your favourite job</h1>
      <div className={styles.jobCategories}>
        {jobCategories.map((jobCategory) => (
          <article key={jobCategory.id}>
            <h6>{jobCategory.title}</h6>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Job;
