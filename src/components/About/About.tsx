import styles from './About.module.css';
import { FaRegFileAlt, FaRegClock, FaRegBell } from 'react-icons/fa';

// components
import FeatureCard from '../ui/FeatureCard/FeatureCard';

function About() {
  return (
    <section className={styles.about}>
      <h4 className={styles.title}>We work to do the best</h4>
      <h1 className={styles.subtitle}>The Only Job Seeker Centric Platform</h1>
      <div className={styles.features}>
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
    </section>
  );
}

export default About;
