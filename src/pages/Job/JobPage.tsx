import { useParams } from 'react-router';

// components
import Input from '../../components/ui/Input/Input';

// extras
import styles from './JobPage.module.css';
import { jobs } from '../../utils/constants';
import Button from '../../components/ui/Button/Button';

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
        <h4 className={styles.applicationTitle}>Apply for this job</h4>
        <form>
          <Input
            type='text'
            name='name'
            value={''}
            placeholder='Full Name'
            onChange={() => console.log('name')}
          />
          <Input
            type='email'
            name='email'
            value={''}
            placeholder='Email'
            onChange={() => console.log('email')}
          />
          <Input
            type='number'
            name='number'
            value={''}
            placeholder='Phone Number'
            onChange={() => console.log('number')}
          />
          <label htmlFor='cv' className={styles.cvLabel}>
            <span>Upload your CV</span>
            <input type='file' name='cv' id='cv' className={styles.cvInput} />
          </label>
          <textarea
            name='cover'
            id='cover'
            rows={4}
            placeholder='Cover Letter'
            className={styles.coverLetter}
          ></textarea>
          <Button variant='primary' onClick={() => console.log('Apply Now')}>
            Apply Now
          </Button>
        </form>
      </section>
    </main>
  );
}

export default JobPage;
