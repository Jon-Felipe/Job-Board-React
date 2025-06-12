import styles from './Hero.module.css';

// component
import Search from '../ui/Search/Search';
import Button from '../ui/Button/Button';

function Hero() {
  return (
    <section className={styles.hero}>
      <h6 className={styles.topText}>We are your future</h6>
      <h1 className={styles.title}>Get Your Desired Job With Job Board.</h1>
      <p className={styles.subtitle}>
        Great jobs, create trackable resumes and enrich your applications
      </p>
      <form className={styles.searchForm}>
        <Search
          name='search'
          placeholder='Job Title, Keywords...'
          value=''
          onChange={() => console.log('onChange')}
        />
        <Button variant='secondary'>Search</Button>
      </form>
    </section>
  );
}

export default Hero;
