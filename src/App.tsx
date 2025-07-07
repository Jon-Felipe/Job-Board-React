// components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

function App() {
  return (
    <>
      <Header title='Job Board' />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
