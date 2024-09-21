import './App.css';
import MyNavbar from './components/navbar';
import HeroSection from './components/header';
import Features from './components/feature';
import Products from './components/product';
import Policies from './components/policies';
import BusinessSection from './components/business';
import ReviewCarousel from './components/carousel';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <HeroSection/>
      <Features/>
      <Products/>
      <Policies/>
      <BusinessSection/>
      <ReviewCarousel/>
      <Footer/>

    </div>
  );
}

export default App;
