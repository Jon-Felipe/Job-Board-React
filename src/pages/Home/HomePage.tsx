import { useState } from 'react';
import {
  FaRegBell,
  FaRegClock,
  FaRegFileAlt,
  FaTh,
  FaBars,
} from 'react-icons/fa';

// components
import Search from '../../components/ui/Search/Search';
import Button from '../../components/ui/Button/Button';
import FeatureCard from '../../components/ui/FeatureCard/FeatureCard';
import LinkButton from '../../components/ui/LinkButton/LinkButton';
import JobCard from '../../components/JobCard/JobCard';
import JobTile from '../../components/JobTile/JobTile';

// extras
import {
  AboutContainer,
  FeatureJobsContainer,
  HeroContainer,
} from './HomePage.styles';
import { jobCategories, jobs } from '../../utils/constants';

function HomePage() {
  const [isCardView, setIsCardView] = useState<boolean>(true);

  return (
    <main>
      <HeroContainer>
        <h6 className='text'>We are your future</h6>
        <h1 className='title'>Get Your Desired Job With Job Board.</h1>
        <p className='sub-text'>
          Great jobs, create trackable resumes and enrich your applications
        </p>
        <form className='search-form'>
          <div className='search-input'>
            <Search
              name='search'
              placeholder='Job Title, Keywords...'
              value=''
              onChange={() => console.log('onChange')}
            />
          </div>
          <Button
            type='submit'
            variant='primary'
            size='large'
            onClick={() => console.log('search')}
          >
            Search
          </Button>
        </form>
        <div className='categories'>
          <h4 className='category-title'>Popular Categories:</h4>
          <ul className='category-list'>
            <li>
              <a href='#'>Marketing</a>
            </li>
            <li>
              <a href='#'>Design</a>
            </li>
            <li>
              <a href='#'>Development</a>
            </li>
          </ul>
        </div>
      </HeroContainer>
      <AboutContainer>
        <h4 className='text'>We work to do the best</h4>
        <h1 className='title'>The Only Job Seeker Centric Platform</h1>
        <div className='features'>
          <FeatureCard
            icon={<FaRegFileAlt />}
            title='Create your resume'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corrupti ipsam, quae dolorem nobis excepturi laboriosam consequuntur consectetur velit numquam!'
          />
          <FeatureCard
            icon={<FaRegClock />}
            title='Get matched in minutes'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corrupti ipsam, quae dolorem nobis excepturi laboriosam consequuntur consectetur velit numquam!'
          />
          <FeatureCard
            icon={<FaRegBell />}
            title='Never miss an opportunity'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corrupti ipsam, quae dolorem nobis excepturi laboriosam consequuntur consectetur velit numquam!'
          />
        </div>
      </AboutContainer>
      <FeatureJobsContainer>
        <h1 className='title'>Find your favourite job</h1>
        <div className='job-categories'>
          {jobCategories.map((jobCategory) => (
            <article key={jobCategory.id} className='job-categoryLink'>
              <h4>{jobCategory.title}</h4>
            </article>
          ))}
        </div>
        <div className='job-listActions'>
          <LinkButton variant='text' path='jobs'>
            View All Jobs
          </LinkButton>
          <div className='job-layoutButtons'>
            <button
              onClick={() => setIsCardView(false)}
              className={!isCardView ? 'isActive' : ''}
            >
              <FaBars />
            </button>
            <button
              onClick={() => setIsCardView(true)}
              className={isCardView ? 'isActive' : ''}
            >
              <FaTh />
            </button>
          </div>
        </div>
        <div className={isCardView ? 'job-cards' : 'job-tiles'}>
          {jobs.map((job) =>
            isCardView ? (
              <JobCard key={job.id} job={job} />
            ) : (
              <JobTile key={job.id} job={job} />
            )
          )}
        </div>
      </FeatureJobsContainer>
    </main>
  );
}

export default HomePage;
