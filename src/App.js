import './App.css';
import BmiCalculator from './components/BmiCalculator';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import Plans from './components/Plans';
import Program from './components/Program';
import WhyUs from './components/WhyUs';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Home/>
      <Program/>
      <BmiCalculator/>
      <WhyUs/>
      <NewsLetter/>
      <Plans/>
      <Footer/>
    </div>
  );
}

export default App;
