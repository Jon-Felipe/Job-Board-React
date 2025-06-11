import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <h6 className={styles.topText}>We are your future</h6>
      <h1 className={styles.title}>Get Your Desired Job With Job Board.</h1>
      <p className={styles.subtitle}>
        Great jobs, create trackable resumes and enrich your applications
      </p>
    </section>
  );
}

export default Hero;
