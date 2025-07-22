// components
import Dropdown from '../../components/Dropdown/Dropdown';
import JobCard from '../../components/Job/JobCard';

// extras
import styles from './JobsPage.module.css';
import { jobs, jobTypes, experienceLevel } from '../../utils/constants';

function JobsPage() {
  return (
    <main>
      <section className={styles.header}>
        <h3 className={styles.title}>Find Your Favourite Job</h3>
        <p className={styles.text}>
          Find jobs, create trackable resumes and enrich your applications
        </p>
      </section>
      <div className={styles.jobsContainer}>
        <section className={styles.filters}>
          <h4>Filters</h4>
          <div className={styles.filterOptions}>
            <Dropdown title='Job Types' dropdownOptions={jobTypes} />
            <Dropdown
              title='Experience Level'
              dropdownOptions={experienceLevel}
            />
          </div>
        </section>
        <section className={styles.jobs}>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default JobsPage;
