// components
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Job from '../components/Job/Job';

function HomePage() {
  return (
    <>
      <Header title='Job Board' />
      <main>
        <Hero />
        <About />
        <Job />
      </main>
    </>
  );
}

export default HomePage;
