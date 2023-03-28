import './App.scss';
import Swiper from './components/swiper/Swiper';
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer"
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <Footer />

      <Swiper />
    </div>
  );
}

export default App;
