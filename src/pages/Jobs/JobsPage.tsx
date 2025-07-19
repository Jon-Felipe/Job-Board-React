// components
import JobCard from '../../components/Job/JobCard';

// extras
import styles from './JobsPage.module.css';
import { jobs } from '../../utils/constants';

function JobsPage() {
  return (
    <main>
      <section className={styles.jobs}>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>
    </main>
  );
}

export default JobsPage;
