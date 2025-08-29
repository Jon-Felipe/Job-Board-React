import { useParams } from 'react-router';

// components
import Input from '../../components/ui/Input/Input';

// extras
import { jobs } from '../../utils/constants';
import Button from '../../components/ui/Button/Button';
import { JobPageContainer } from './JobPage.styles';

function JobPage() {
  const params = useParams();

  const job = jobs.find((job) => job.id === params.id);

  return (
    <JobPageContainer>
      <section className='jobCard'>
        <div className='jobHeader'>
          <div>
            <div className='company'>{job?.company}</div>
            <div className='title'>{job?.title}</div>
          </div>
          <div className='postedDate'>{job?.postedDate.toDateString()}</div>
        </div>
        <p className='jobIndustry'>{job?.industry}</p>
        <div className='jobFeatures'>
          <p className='employmentType'>{job?.employmentType}</p>
          <p className='location'>{job?.location}</p>
          <p>
            ${job?.salaryFrom} - ${job?.salaryTo} USD
          </p>
        </div>
        <div>
          <h4 className='descriptionTitle'>Job Description</h4>
          <p className='descriptionText'>{job?.description}</p>
        </div>
        <div>
          <h4 className='skillsTitle'>Job Skills</h4>
          <ul className='jobSkills'>
            {job?.skillsRequired.map((skill) => (
              <li key={skill} className='skill'>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='jobCard jobForm'>
        <h4 className='title'>Apply for this job</h4>
        <form className='inputs'>
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
          <label htmlFor='cv' className='cvTitle'>
            <span>Upload your CV</span>
            <input type='file' name='cv' id='cv' />
          </label>
          <textarea
            name='cover'
            id='cover'
            rows={4}
            placeholder='Cover Letter'
            className='coverLetter'
          ></textarea>
          <Button
            type='submit'
            variant='primary'
            onClick={() => console.log('Apply Now')}
          >
            Apply Now
          </Button>
        </form>
      </section>
    </JobPageContainer>
  );
}

export default JobPage;
