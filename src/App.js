import './App.css';
import Hero from './components/hero/Hero';
import Program from './components/program/Program';
import Reasons from './components/reasons/Reasons';
import Plans from './components/plans/Plans';
import Testimonials from './components/testimonials/Testimonials';
import Join from './components/join/Join';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
