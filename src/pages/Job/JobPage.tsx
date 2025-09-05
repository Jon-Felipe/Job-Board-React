import { useParams } from 'react-router';
import { useGetJobQuery } from '../../features/api/jobsApiSlice';

// components
import Input from '../../components/ui/Input/Input';
import Spinner from '../../components/ui/Spinner/Spinner';

// extras
import Button from '../../components/ui/Button/Button';
import { JobPageContainer, SpinnerContainer } from './JobPage.styles';

function JobPage() {
  const params = useParams();
  const { data, isLoading } = useGetJobQuery(params.id!);

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner size='large' />
      </SpinnerContainer>
    );
  }

  return (
    <JobPageContainer>
      <section className='jobCard'>
        <div className='jobHeader'>
          <div>
            <div className='company'>{data?.job?.company}</div>
            <div className='title'>{data?.job?.title}</div>
          </div>
          <div className='postedDate'>{data?.job?.createdAt}</div>
        </div>
        <p className='jobIndustry'>{data?.job?.industry}</p>
        <div className='jobFeatures'>
          <p className='employmentType'>{data?.job?.employmentType}</p>
          <p className='location'>{data?.job?.location}</p>
          <p>
            ${data?.job?.salaryFrom} - ${data?.job?.salaryTo} USD
          </p>
        </div>
        <div>
          <h4 className='descriptionTitle'>Job Description</h4>
          <p className='descriptionText'>{data?.job?.description}</p>
        </div>
        <div>
          <h4 className='skillsTitle'>Job Skills</h4>
          <ul className='jobSkills'>
            {data?.job?.skillsRequired.map((skill) => (
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
