// components
import Search from '../../components/ui/Search/Search';
import Button from '../../components/ui/Button/Button';
import About from '../../components/About/About';
import Job from '../../components/Job/Job';

// extras
import { HeroContainer } from './HomePage.styles';

function HomePage() {
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
      <About />
      <Job />
    </main>
  );
}

export default HomePage;
