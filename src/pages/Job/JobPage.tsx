import { useParams } from 'react-router';

// extras
import styles from './JobPage.module.css';
import { jobs } from '../../utils/constants';

function JobPage() {
  const params = useParams();

  const job = jobs.find((job) => job.id === params.id);

  return (
    <main className={styles.jobPage}>
      <section className={styles.card}>
        <div className={styles.jobHeader}>
          <div className={styles.job}>
            <h4 className={styles.company}>{job?.company}</h4>
            <h2 className={styles.title}>{job?.title}</h2>
            <p className={styles.industry}>{job?.industry}</p>
            <div className={styles.jobFeatures}>
              <p>{job?.employmentType}</p>
              <p>{job?.location}</p>
              <p>
                ${job?.salaryFrom} - ${job?.salaryTo} USD
              </p>
            </div>
          </div>
          <div>
            <p className={styles.date}>{job?.postedDate.toDateString()}</p>
          </div>
        </div>
        <div>
          <h4 className={styles.jobDescriptionTitle}>Job Description</h4>
          <p className={styles.jobDescription}>{job?.description}</p>
        </div>
        <div>
          <h4 className={styles.jobSkillsTitle}>Job Skills</h4>
          <ul className={styles.jobSkills}>
            {job?.skillsRequired.map((skill) => (
              <li key={skill} className={styles.jobSkill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={`${styles.card} ${styles.form}`}>
        application form
      </section>
    </main>
  );
}

export default JobPage;
